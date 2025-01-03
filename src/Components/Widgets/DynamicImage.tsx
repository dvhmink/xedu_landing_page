import { Box, ChakraProps, Image } from '@chakra-ui/react';
import { changeCloudflareVariant } from '../../Utilities/toolkits';
import { CloudFlareBlurImageVariant, CloudFlareClearImageVariant } from '../../Redux/type';

interface Props extends ChakraProps {
  cloudFlareUrl: string;
  blurVariant?: CloudFlareBlurImageVariant;
  clearVariant?: CloudFlareClearImageVariant;
}

export default function DynamicImage({
  cloudFlareUrl,
  blurVariant,
  clearVariant,
  ...props
}: Props) {
  return (
    <Box
      bg={`url(${changeCloudflareVariant(
        cloudFlareUrl,
        blurVariant || 'blursm'
      )}) no-repeat center center`}
      // w={'100%'}
      // h={'100%'}
      bgSize={'cover'}
    >
      <Image src={changeCloudflareVariant(cloudFlareUrl, clearVariant || 'thumbnail')} {...props} />
    </Box>
  );
}
