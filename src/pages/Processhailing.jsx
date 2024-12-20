import { useState } from "react";
import {
  ChevronRight,
  Upload,
  FileText,
  Check,
  Circle,
  ChevronRightIcon,
  HomeIcon,
} from "lucide-react";
const contractProgressData = {
  contractId: "CNT001",
  contractName: "Coffee Supply Contract 2024",
  currentStep: "process_haling",
  estimatedCompletion: "2024-02-01",
  steps: [
    {
      id: "order_placed",
      title: "Order placed",
      description: "Lorem consectetur adipisicing elit.",
      status: "finished",
      order: 1,
      documents: [],
      estimatedDate: "2024-01-15",
      required_actions: [],
    },
    {
      id: "process_haling",
      title: "Process Haling",
      description: "Lorem consectetur adipisicing elit.",
      status: "current",
      order: 2,
      documents: [
        {
          id: "doc1",
          name: "Requirements.pdf",
          type: "pdf",
          url: "/documents/requirements.pdf",
        },
      ],
      estimatedDate: "2024-01-20",
      required_actions: ["upload_documents"],
    },
    {
      id: "bag_mark",
      title: "Bag mark",
      description: "Lorem consectetur adipisicing elit.",
      status: "pending",
      order: 3,
      documents: [],
      estimatedDate: "2024-01-25",
      required_actions: [],
    },
    {
      id: "packaging",
      title: "Packaging",
      description: "Lorem consectetur adipisicing elit.",
      status: "pending",
      order: 4,
      documents: [],
      estimatedDate: "2024-01-27",
      required_actions: [],
    },
    {
      id: "draft_document",
      title: "Draft Document",
      description: "Lorem consectetur adipisicing elit.",
      status: "pending",
      order: 5,
      documents: [],
      estimatedDate: "2024-01-28",
      required_actions: [],
    },
    {
      id: "staffing",
      title: "Staffing",
      description: "Lorem consectetur adipisicing elit.",
      status: "pending",
      order: 6,
      documents: [],
      estimatedDate: "2024-01-29",
      required_actions: [],
    },
    {
      id: "shipping",
      title: "Shipping",
      description: "Lorem consectetur adipisicing elit.",
      status: "pending",
      order: 7,
      documents: [],
      estimatedDate: "2024-01-30",
      required_actions: [],
    },
    {
      id: "draft_document_overview",
      title: "Draft Document Overview",
      description: "Lorem consectetur adipisicing elit.",
      status: "pending",
      order: 8,
      documents: [],
      estimatedDate: "2024-01-31",
      required_actions: [],
    },
    {
      id: "proof_of_payment",
      title: "Proof of Payment",
      description: "Lorem consectetur adipisicing elit.",
      status: "pending",
      order: 9,
      documents: [],
      estimatedDate: "2024-01-31",
      required_actions: [],
    },
    {
      id: "document_released",
      title: "Document released",
      description: "Lorem consectetur adipisicing elit.",
      status: "pending",
      order: 10,
      documents: [],
      estimatedDate: "2024-02-01",
      required_actions: [],
    },
  ],
};

export default function ContractProgress() {
  const [activeStep, setActiveStep] = useState(
    contractProgressData.currentStep
  );

  const getCurrentStep = () => {
    return contractProgressData.steps.find((step) => step.id === activeStep);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <HomeIcon className="h-4 w-4" />
          <ChevronRightIcon className="h-4 w-4" />
          <span>Contracts</span>
          <ChevronRightIcon className="h-4 w-4" />
          <span>Progress</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">
          {contractProgressData.contractName}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="space-y-0 relative">
            {contractProgressData.steps.map((step, index) => (
              <div key={step.id}>
                <div
                  className={`flex items-start relative ${
                    step.id === activeStep
                      ? "bg-white shadow-sm rounded-lg p-4"
                      : "p-4"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  {/* Vertical dashed line */}
                  {index < contractProgressData.steps.length - 1 && (
                    <div className="absolute left-[25px] top-[32px] w-[2px] h-[calc(100%-16px)] border-l-2 border-dashed border-gray-200" />
                  )}

                  {/* Dot and content container */}
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${
                          step.status === "finished"
                            ? "bg-green-500 border-green-500"
                            : step.status === "current"
                            ? "bg-orange-500 border-orange-500"
                            : "bg-white border-gray-300"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">
                          {step.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {step.status === "finished" && (
                            <Check className="w-4 h-4 text-green-500" />
                          )}
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {getCurrentStep()?.title}
              </h2>

              <div className="prose prose-sm max-w-none text-gray-500 mb-8">
                <p>
                  We are pleased to inform you that your order has entered the{" "}
                  {getCurrentStep()?.title} stage. During this step, our team is
                  preparing your order for further stages, ensuring all
                  necessary processes are carried out efficiently.
                </p>
                <p>
                  Please note that if any further action is required on your
                  side, such as document submissions or clarifications, we will
                  notify you promptly. You can track your progress at any time
                  via your account.
                </p>
                <p>
                  Thank you for your patience and trust in Aromax Coffee
                  Company.
                </p>
              </div>

              {getCurrentStep()?.required_actions.includes(
                "upload_documents"
              ) && (
                <div className="border rounded-lg p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      Upload
                    </h3>
                    <button className="text-blue-600 text-sm font-medium">
                      <Upload className="w-4 h-4 inline mr-1" />
                      Add Files
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {getCurrentStep()?.documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center space-x-3 p-3 bg-white rounded border"
                      >
                        <FileText className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {doc.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
