import React, { useState } from "react";
import {
  DocumentTextIcon,
  HomeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import coffeeBags2 from "../assets/coffee2.jpg";
import { Link } from "react-router-dom";
export default function Contracts() {
  const [selectedContract, setSelectedContract] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const contracts = [
    {
      id: 1,
      number: "Contract #1",
      email: "User@email.com",
      company: "Company Name",
      status: "Approved",
      date: "14/06/21",
    },
    {
      id: 2,
      number: "Contract #1",
      email: "User@email.com",
      company: "Company Name",
      status: "Pending",
      date: "14/06/21",
    },
    {
      id: 3,
      number: "Contract #1",
      email: "User@email.com",
      company: "Company Name",
      status: "Pending",
      date: "14/06/21",
    },
  ];

  const handleContractClick = (contract) => {
    setSelectedContract(contract);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedContract(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <HomeIcon className="h-4 w-4" />
          <ChevronRightIcon className="h-4 w-4" />
          <span>Contracts</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold mb-8">Contract</h1>

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-5 px-6 py-3 border-b text-sm text-gray-500 uppercase">
            <div>Contracts</div>
            <div>Company</div>
            <div>Status</div>
            <div>Date of Submission</div>
            <div> </div>
          </div>

          {/* Table Body */}
          <div className="divide-y">
            {contracts.map((contract) => (
              <div
                key={contract.id}
                className="grid grid-cols-5 gap-5 px-6 py-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleContractClick(contract)}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-200 p-2 rounded-lg">
                    <DocumentTextIcon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">{contract.number}</div>
                    <div className="text-sm text-gray-500">
                      {contract.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <div className="font-medium">Company</div>
                    <div className="text-sm text-gray-500">
                      {contract.company}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      contract.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {contract.status}
                  </span>
                </div>
                <div className="flex items-center text-gray-500">
                  {contract.date}
                </div>
                <Link
                  to={`/process-hailing`}
                  className="flex items-center text-gray-500"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm"
              onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
              <img
                src={coffeeBags2}
                alt="Plant"
                className="w-full h-40 object-cover rounded-lg mb-6"
              />

              {selectedContract?.status === "Pending" ? (
                <>
                  <h2 className="text-xl  text-orange-500 font-semibold mb-4">
                    Your Contract is Still Being Processed
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for your patience! Your contract is currently
                    being processed by our admin team. We will notify you as
                    soon as there's an update.
                  </p>
                  <button
                    onClick={closeModal}
                    className="w-full bg-[#4a5d4a] text-white py-2 rounded hover:bg-[#3d4f3d] transition-colors"
                  >
                    Ok
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-4">
                    Contract Request Approved!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We regret to inform you that your contract request has been
                    denied. For further details or to address any concerns,
                    please contact our support team.
                  </p>
                  <button
                    onClick={closeModal}
                    className="w-full bg-[#4a5d4a] text-white py-2 rounded hover:bg-[#3d4f3d] transition-colors"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
