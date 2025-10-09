import OrderForm from "./SupplierForm";
import {X} from "lucide-react"

interface SupplierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupplierModal: React.FC<SupplierModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 h-screen w-full "
    >
      <div className="bg-white rounded-lg shadow-md w-fullshadow-lg p-6 w-96 dark:bg-slate-100">
        <div className="flex justify-between w-full">
          <h2 className="text-lg font-semibold mb-4">
            Ajouter un fournisseur
          </h2>
          <button
            onClick={onClose}
            className="rounded-md text-slate-800 hover:bg-red-500 border-2 border-red-500 w-6 h-6 text-xl flex justify-center items-center cursor-pointer hover:text-white duration-300 "
          >
            <X/>
          </button>
        </div>
        <OrderForm/>
      </div>
    </dialog>
  );
};

export default SupplierModal;
