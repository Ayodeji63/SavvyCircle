import ModalTitle from "@/components/common/modal-title";
import { Button } from "@/components/ui/button";
import { Modal } from "antd";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const DepositModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      closable={false}
      title={<ModalTitle title="Confirmation" />}
    >
      <p className="text-center text-sm font-normal leading-4 text-[#0A0F29]">
        Are you sure you want to make a deposit to group 1?
      </p>

      <div className="mt-3 space-y-2">
        <Button className="bg-[#4A9F17]">Yes, i want to make a deposit</Button>
        <Button
          onClick={onClose}
          className="border border-[#696F8C] text-sm font-normal leading-4 text-black"
        >
          No, i don’t want to make a deposit
        </Button>
      </div>
    </Modal>
  );
};

export default DepositModal;