import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  LinkBox,
  Stack,
  Text,
  Wrap
} from '@chakra-ui/react';
import { MobileAppURL } from '../../Constants';

export default function MobileApp() {
  return (
    <Box minH={'90dvh'}>
      <Wrap p={4}>
        <Card direction={'row'} overflow="hidden" variant="xedu">
          <Image objectFit="contain" maxW={'8rem'} src="/appstore.png" p={2} />
          <Stack>
            <CardBody>
              <Heading size="md">Xe dù iOS</Heading>

              <Text py="2">Tải ứng dụng Xe dù trên App Store.</Text>
              <LinkBox as="a" href={MobileAppURL.APP_STORE} target="_blank" rel="noreferrer">
                <Button variant={'xedu'} size={'sm'}>
                  <Text>Đi đến App Store</Text>
                </Button>
              </LinkBox>
            </CardBody>
          </Stack>
        </Card>
        <Card direction={'row'} overflow="hidden" variant="xedu">
          <Image objectFit="contain" maxW={'8rem'} src="/playstore.png" p={8} />
          <Stack>
            <CardBody>
              <Heading size="md">Xe dù Android</Heading>

              <Text py="2">Tải ứng dụng Xe dù trên Google Play.</Text>
              <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
                <LinkBox as="a" href={MobileAppURL.GOOGLE_PLAY} target="_blank" rel="noreferrer">
                  <Button variant={'xedu'} size={'sm'}>
                    <Text>Đi đến Google Play</Text>
                  </Button>
                </LinkBox>
                <LinkBox as="a" href={MobileAppURL.APK} target="_blank" rel="noreferrer">
                  <Button variant={'xeduSecondary'} size={'sm'}>
                    <Text>Tải file APK</Text>
                  </Button>
                </LinkBox>
              </Stack>
            </CardBody>
          </Stack>
        </Card>
      </Wrap>
    </Box>
  );
}
