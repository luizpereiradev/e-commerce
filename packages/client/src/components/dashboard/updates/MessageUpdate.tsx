import React from "react";
import { FiMessageSquare } from "react-icons/fi";

type MessageUpdateProps = {
    sender: string;
};

const MessageUpdate = ({ sender }: MessageUpdateProps) => {
  return (
    <div className="flex items-center justify-between pt-5">
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center bg-green-200">
          <FiMessageSquare size={24} color="#2DD4BF" />
        </div>
        <p className="text-gray-600 text-sm font-medium pl-3">
          New message from <span className="text-blue-500">@{sender}</span>
        </p>
      </div>
    </div>
  );
};

export default MessageUpdate;
