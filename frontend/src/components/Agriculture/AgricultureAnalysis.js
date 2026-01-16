import React from 'react';
import Card from '../UI/Card';
import { Leaf, ShieldCheck, BarChart2 } from 'lucide-react';

const AgricultureAnalysis = ({ data }) => {
  if (!data) {
    return null;
  }

  const { crop_recommendations, crop_health } = data;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Agricultural Analysis</h3>

      {/* Crop Recommendations */}
      <Card>
        <Card.Header>
          <div className="flex items-center">
            <Leaf className="h-6 w-6 text-green-600 mr-2" />
            <h4 className="text-lg font-medium text-gray-900">Crop Recommendations</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Recommended Crops</p>
              <p className="text-lg font-bold text-gray-900">
                {crop_recommendations?.recommended_crops?.join(', ') || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Confidence Score</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${crop_recommendations?.confidence || 0}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-600">{crop_recommendations?.confidence || 0}%</p>
            </div>
            {crop_recommendations?.risk_factors?.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-600">Risk Factors</p>
                <ul className="list-disc list-inside text-sm text-red-600">
                  {crop_recommendations.risk_factors.map((risk, index) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Crop Health */}
      <Card>
        <Card.Header>
          <div className="flex items-center">
            <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
            <h4 className="text-lg font-medium text-gray-900">Crop Health</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Status</p>
              <p
                className={`text-lg font-bold ${
                  crop_health?.color_code === 'green'
                    ? 'text-green-600'
                    : crop_health?.color_code === 'yellow'
                    ? 'text-yellow-600'
                    : 'text-red-600'
                }`}
              >
                {crop_health?.status || 'N/A'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-600">Mean NDVI</p>
              <p className="text-lg font-bold text-gray-900">
                {crop_health?.mean_ndvi || 'N/A'}
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AgricultureAnalysis;
