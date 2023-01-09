import { Box, Divider, Text } from "@chakra-ui/react";

// const ConcertItem = (props) => {
//   const imgs = props.imgs;
//   return <>{imgs.map(img => console.log(img))}</>;
// };

const ConcertList = () => {
    return (
        <>
        </>
    )
}

export default function PcConcert() {
  return (
    <>
      <Box bgColor="blackAlpha.50" h="16vh" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="20">
          Concert
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box w="70vw" mt="5rem" mb="10">
          <ConcertList />
        </Box>
      </Box>
    </>
  );
}
