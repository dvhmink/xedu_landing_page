import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  Text,
  useToast
} from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';
import { createJob, deleteCloudImage, uploadImageToCloud } from '../../API';
import { RecruitForm, XeduErrorResponse } from '../../Redux/type';

export default function JobApplyModal({
  isOpen,
  onClose,
  jobID
}: {
  isOpen: boolean;
  onClose: () => void;
  jobID: string;
}) {
  const toast = useToast();
  const [formData, setFormData] = useState<RecruitForm>({
    jobID: '',
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    education: '',
    language: '',
    cv: null
  });
  const [isUploading, setIsUploading] = useState(false);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleUploadCV = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const fileExtension = file.name.split('.').pop();
    const isCV = ['pdf', 'png', 'jpeg'].includes(fileExtension || '');
    if (!isCV) {
      toast({
        title: 'File không hợp lệ',
        description: 'Chỉ chấp nhận file .pdf .png .jpeg',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
      return;
    }
    setIsUploading(true);
    uploadImageToCloud(event.target.files![0])
      .then((res) => {
        setFormData((prv) => ({ ...prv, cv: res.data }));
      })
      .finally(() => {
        setIsUploading(false);
      });
  };
  const handleDeleteCV = () => {
    if (formData?.cv?.name !== null) {
      setIsUploading(true);
      deleteCloudImage((formData.cv && formData?.cv.name) || '')
        .then(() => {
          setFormData((prv) => ({ ...prv, cv: null }));
        })
        .finally(() => {
          setIsUploading(false);
        });
    }
  };
  const handleSubmmit = () => {
    formData.jobID = jobID;
    createJob(formData)
      .then(() => {
        toast({
          title: 'Gửi form thành công',
          description: 'Cảm ơn bạn đã ứng tuyển, chúng tôi sẽ liên hệ với bạn sớm nhất có thể.',
          status: 'success',
          duration: 15000,
          isClosable: true
        });
        onClose();
      })
      .catch((error: XeduErrorResponse) => {
        toast({
          title: 'Gửi form thất bại',
          description: error.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true
        });
      });
  };

  const ref = useRef<HTMLInputElement>(null);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Thông tin ứng tuyển</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl variant="floating" mb={'2rem'} id="first-name" isRequired>
            <Input
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder=" "
            />
            <FormLabel>Họ và tên của bạn</FormLabel>
            <FormHelperText>Tiếng việt, có dấu</FormHelperText>
          </FormControl>
          <FormControl mb={'2rem'} id="dob" isRequired>
            <FormLabel>Ngày sinh: </FormLabel>
            <Input name="dob" value={formData.dob} onChange={handleInputChange} type="date" />
          </FormControl>
          <FormLabel>Giới tính</FormLabel>
          <RadioGroup
            mb={'2rem'}
            defaultValue={''}
            onChange={(val: string) => {
              setFormData((prv) => ({ ...prv, gender: val }));
            }}
            name="gender"
          >
            <Stack direction="row">
              <Radio value="male">Nam</Radio>
              <Radio value="female">Nữ</Radio>
              <Radio value="other">Khác</Radio>
            </Stack>
          </RadioGroup>
          <FormControl variant="floating" mb={'2rem'} isRequired>
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder=" "
            />
            <FormLabel>Địa chỉ email</FormLabel>
          </FormControl>
          <FormControl variant="floating" mb={'2rem'} isRequired>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder=" "
            />
            <FormLabel>Số điện thoại</FormLabel>
          </FormControl>
          <FormControl variant="floating" mb={'2rem'} isRequired>
            <Input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder=" "
            />
            <FormLabel>Địa chỉ</FormLabel>
          </FormControl>
          <FormControl variant="floating" mb={'2rem'} isRequired>
            <Input
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              placeholder=" "
            />
            <FormLabel>Trình độ học vấn</FormLabel>
          </FormControl>
          <FormControl variant="floating" mb={'2rem'} isRequired>
            <Input
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              placeholder=" "
            />
            <FormLabel>Trình độ ngoại ngữ</FormLabel>
            <FormHelperText>Chứng chỉ ngoại ngữ của bạn (nếu có)</FormHelperText>
          </FormControl>
          <FormControl mb={'2rem'} isRequired>
            <FormLabel>CV của bạn</FormLabel>
            <input
              ref={ref}
              id="upload-cv-to-xedu"
              type="file"
              multiple
              style={{ display: 'none' }}
              onChange={handleUploadCV}
            />
            {formData.cv === null ? (
              <Button h={'4rem'} w={'4rem'} onClick={() => ref.current && ref.current.click()}>
                {isUploading ? <Spinner size={'lg'} /> : <AddIcon boxSize={4} />}
              </Button>
            ) : (
              <Flex align={'center'}>
                <Button h={'4rem'} w={'4rem'} onClick={handleDeleteCV}>
                  {isUploading ? <Spinner size={'lg'} /> : <DeleteIcon boxSize={4} />}
                </Button>
                <Text ml={4}>{formData.cv.name}</Text>
              </Flex>
            )}
            <FormHelperText>Chỉ chấp nhận file .pdf .png .jpeg</FormHelperText>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmmit}>
            Gửi form ứng tuyển
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
