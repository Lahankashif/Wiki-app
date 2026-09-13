export const Modal = ({ open, title, message, buttonText = "OK", onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};