import { useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Box, Card, Flex, Input } from '@chakra-ui/react';

type Props = {
  setAddress: (address: Address) => void;
  title?: string;
  defaultValue?: string;
  placeholder?: string;
};

export type Address = {
  str?: string;
  coor: {
    lat: number;
    lng: number;
  };
  district?: string;
};
export declare type Library =
  | 'core'
  | 'maps'
  | 'places'
  | 'geocoding'
  | 'routes'
  | 'marker'
  | 'geometry'
  | 'elevation'
  | 'streetView'
  | 'journeySharing'
  | 'drawing'
  | 'visualization';

const libraries: Library[] = ['places'];

function AddressInput({
  setAddress,
  title,
  defaultValue = '',
  placeholder = '80/20 Hoang Hoa Tham...'
}: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
    libraries: libraries
  });
  // useEffect(() => {
  //   setAddress(undefined);
  // }, [setAddress]);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <PlacesAutocomplete
        setAddress={setAddress}
        title={title}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </>
  );
}

export default AddressInput;

const PlacesAutocomplete = ({ setAddress, defaultValue = '', placeholder = '' }: Props) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      locationBias: { radius: 100, center: { lat: 10.7828182, lng: 106.6984367 } }
    },
    debounce: 300
  });
  useEffect(() => {
    setValue(defaultValue);
  }, [setValue, defaultValue]);
  // const ref = useOnclickOutside(() => {
  //   clearSuggestions();
  // });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: { description: string }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        let district = '';
        for (let i = 0; i <= results[0].address_components.length; i++) {
          if (results[0].address_components[i]?.types[0] == 'administrative_area_level_2') {
            district = results[0].address_components[i].long_name;
          }
        }
        setAddress({ str: description, coor: { lat, lng }, district });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <Card
          w={'100%'}
          mt={2}
          py={2}
          px={4}
          key={place_id}
          onClick={handleSelect(suggestion)}
          cursor={'pointer'}
          variant={'xedu'}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </Card>
      );
    });

  return (
    <Flex pos={'relative'}>
      <Input
        w={'100%'}
        isDisabled={!ready}
        value={value}
        onChange={handleInput}
        type={'text'}
        placeholder={placeholder}
        textAlign={'center'}
        variant={'xeduFlushed'}
      />
      {status === 'OK' && (
        <Box w={'100%'} flexDir={'column'} pos={'absolute'} top={'2.5rem'} zIndex={10} bg={'white'}>
          {renderSuggestions()}
        </Box>
      )}
    </Flex>
  );
};
