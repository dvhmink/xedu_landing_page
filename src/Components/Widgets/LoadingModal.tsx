import { Modal, ModalBody, Spinner } from '@chakra-ui/react';
import {} from 'react';

const LoadingModal = ({ show }: { show: boolean }) => {
  return (
    <Modal isOpen={show} isCentered onClose={() => {}}>
      <ModalBody className="text-center">
        <Spinner animation="border" variant="primary" />
        <h5>Loading...</h5>
      </ModalBody>
    </Modal>
  );
};

export default LoadingModal;
