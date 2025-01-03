import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { useState } from 'react';
import AddressInput, { Address } from '../../Widgets/AddressInput';
import { requestCostEstimation } from '../../../API';
import { convertCurrency } from '../../../Utilities/toolkits';
import { Location } from '../../../Redux/type';

const initForm: Form = {
  weight: 0,
  origin: { lat: 0, lng: 0 },
  destination: { lat: 0, lng: 0 },
  shippingCost: null,
  shippingDistance: null
};

export default function PriceGenerator() {
  const [costForm, setCostForm] = useState<Form>({
    weight: 0,
    origin: { lat: 0, lng: 0 },
    destination: { lat: 0, lng: 0 },
    shippingCost: null,
    shippingDistance: null
  });
  const [isLoading, setIsLoading] = useState(false);

  function formIsValid(form: Form, initForm: Form) {
    const attArray = Object.getOwnPropertyNames(form);
    for (let i = 0; i < attArray.length; i++) {
      if (attArray[i] === 'shippingCost' || attArray[i] === 'shippingDistance') continue;
      if (
        form[attArray[i] as keyof Form] == initForm[attArray[i] as keyof Form] ||
        form[attArray[i] as keyof Form] === null
      ) {
        return false;
      }
    }
    return true;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    costForm.shippingCost = null;
    costForm.shippingDistance = null;
    setCostForm({
      ...costForm,
      [event.target.name]: parseFloat(event.target.value)
    });
  };
  const handleAddressChange = (type: string, e: Address) => {
    setCostForm({ ...costForm, [type]: e?.coor });
  };

  const submitCost = () => {
    if (formIsValid(costForm, initForm)) {
      setIsLoading(true);
      requestCostEstimation(costForm.weight, costForm.origin, costForm.destination)
        .then(({ data }) => {
          setCostForm({ ...costForm, shippingCost: data.cost, shippingDistance: data.length });
          setIsLoading(false);
        })
        .catch((e: { response: { data: { message: string } }; message: string }) => {
          if (e.response) {
            alert(e.response.data.message);
          } else {
            alert(e.message);
          }
          setIsLoading(false);
        });
    } else {
      alert('Vui lòng điền đủ thông tin');
    }
  };
  return (
    <Box w={'100%'} px={[0, '2rem']} bg={'bgLight'} _dark={{ bg: 'bgDark' }} id="price-generator">
      <Flex flexDir={'column'} alignItems={'center'}>
        <Heading as={'h1'} fontSize={['3xl', '5xl']} textAlign={'center'} pt={8}>
          Tra cứu cước phí ngay
        </Heading>
        <Text fontSize={['lg', 'xl']} textAlign={'center'} pt={4} w={['90%', '75%', '50%', '40%']}>
          Tra cứu cước phí vận chuyển với nhiều chọn lựa để tham khảo và cảm nhận dịch vụ mà chúng
          tôi cam kết với doanh nghiệp của bạn.
        </Text>
      </Flex>
      <Box w={'100%'}>
        <Card
          variant={'xedu'}
          w={['90%', '75%', '60%']}
          mx={'auto'}
          mt={'4rem'}
          px={['1rem', '2rem', '4rem']}
          py={['2rem', '2rem', '4rem']}
        >
          <Box flexDir={'column'} alignItems={'center'}>
            <Text fontWeight={'600'} fontSize={'xl'} textAlign={'center'} mb={'1rem'}>
              Địa chỉ người gửi:
            </Text>
            <AddressInput
              setAddress={(e) => handleAddressChange('origin', e)}
              placeholder={'123, cmt8'}
            />
          </Box>
          <Box flexDir={'column'} alignItems={'center'} mt={'2rem'}>
            <Text fontWeight={'600'} fontSize={'xl'} textAlign={'center'} mb={'1rem'}>
              Địa chỉ người nhận:
            </Text>
            <AddressInput
              setAddress={(e) => handleAddressChange('destination', e)}
              placeholder={'234, ntmk'}
            />
          </Box>
          <Flex flexDir={'column'} alignItems={'center'} mt={'2rem'}>
            <Text fontWeight={'600'} fontSize={'xl'} mb={'1rem'}>
              Khối lượng
            </Text>
            <Select
              textAlign={'center'}
              variant={'xeduFlushed'}
              name="weight"
              onChange={handleInputChange}
              isInvalid={costForm.weight === 0}
            >
              <option value={0}>...</option>
              <option value={0.5}>Dưới 1kg</option>
              <option value={1.5}>Dưới 3kg</option>
              <option value={4}>Từ 3kg tới 5kg</option>
              <option value={7.5}>Từ 5kg tới 10kg</option>
              <option value={15}>Từ 10kg tới 20kg</option>
              <option value={25}>Từ 20kg tới 30kg</option>
            </Select>
          </Flex>
          <Flex flexDir={'column'} alignItems={'center'} mt={'2rem'}>
            <Button bg={'primary.150'} color={'white'} onClick={submitCost} isLoading={isLoading}>
              Tra cứu
            </Button>
          </Flex>
          {costForm.shippingCost !== null && (
            <>
              {costForm.shippingDistance !== null && (
                <Flex justify={'space-between'} mt={'2rem'}>
                  <Text fontWeight={'600'} fontSize={'xl'}>
                    Khoảng cách:
                  </Text>
                  <Text fontWeight={'600'} fontSize={'xl'}>
                    {costForm.shippingDistance / 1000} km
                  </Text>
                </Flex>
              )}
              <Flex justify={'space-between'} mt={'2rem'} flexDir={'column'} align={'center'}>
                <Text fontWeight={'600'} fontSize={'xl'}>
                  Cước phí:
                </Text>
                <TableContainer>
                  <Table variant={'striped'}>
                    <TableCaption>Đơn vị: VNĐ</TableCaption>
                    <Thead>
                      <Tr>
                        <Th>Nhanh</Th>
                        <Th>Sau 5h</Th>
                        <Th>Lưu kho 14k</Th>
                        <Th>Bán tải nhanh</Th>
                        <Th>Bán tải 4h</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr color={'primary.100'} fontWeight={'bold'}>
                        <Td>{convertCurrency(costForm.shippingCost[0])}</Td>
                        <Td>{convertCurrency(costForm.shippingCost[1])}</Td>
                        <Td>{convertCurrency(costForm.shippingCost[2])}</Td>
                        <Td>{convertCurrency(costForm.shippingCost[3])}</Td>
                        <Td>{convertCurrency(costForm.shippingCost[4])}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Flex>
            </>
          )}
        </Card>
      </Box>
    </Box>
  );
}

type Form = {
  weight: number;
  origin: Location;
  destination: Location;
  shippingCost: number[] | null;
  shippingDistance: number | null;
};
