import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import style from "./collections.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/product/product.action";
import Footer from "@/components/Footer/Footer";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ProductArr from "@/components/Product/ProductArr";
import ProductFooter from "@/components/Product/ProductFooter";
import ProductFooter2 from "@/components/Product/ProductFooter2";
import BreadCrumbs from "@/components/BreadCrums/BreadCrums";
import Navbar from "@/components/Navbar/Navbar";

const collectionArr = [
  {
    id: "1",
    query: "Gifts",
    title: "GIFTS",
    image: "/Images/Products/Gifts_banner.webp",
    para1:
      "Taza's intense, pure, and seriously satisfying stone ground chocolate makes for the perfect gift for any occasion, from celebrating a special day to showing gratitude. Unique and striking packaging makes your gift memorable.",
    para2:
      "If you are looking to send 10 or more gifts to separate addresses, as tokens of appreciation or to connect with your remote team, please reach out to the Taza Corporate Gifts Team at corporategifts@tazachocolate.com or call 617-623-0804 x2.  If fewer than 10 gifts are needed, your best bet is to order here on our website.",
  },
  {
    id: 2,
    query: "Chocolate_Bars",
    title: "CHOCOLATE BARS",
    image: "/Images/Products/Bars_banner.webp",
    para1:
      "Our Chocolate Bars take stone ground chocolate to another dimension by mixing incredible flavor combinations into our minimally processed, bold chocolate.",
    para2:
      "Never run out of your favorites! Subscribe & Save 10%. Change, skip or cancel anytime.",
  },
  {
    id: 3,
    query: "Chocolate_Discs",
    title: "CHOCOLATE DISCS",
    image: "/Images/Products/Discs_banner.webp",
    para1:
      "Inspired by our passion for Mexican chocolate traditions, we hand-carve granite millstones to make these rustic, organic dark Mexican style chocolate discs bursting with bright tastes and gloriously gritty textures.",
    para2:
      "Never run out of your favorites! Subscribe & Save 10%. Change, skip or cancel anytime.",
  },
  {
    id: 4,
    query: "Chocolate_Snacks",
    title: "CHOCOLATE SNACKS",
    image: "/Images/Products/Snacks_banner.webp",
    para1:
      "Taza Chocolate snacks pair organic, stone ground dark chocolate with nutrition-packed super food ingredients like almonds, coconut, and crispy puffed quinoa. Feel good about your snacks!",
    para2: "",
  },
  {
    id: 5,
    query: "Smooth_Crunchy_Bars",
    title: "SMOOTH & CRUNCHY BARS",
    image: "/Images/Products/Smooth_Crunchy_BARS_banner.webp",
    para1:
      "Our NEW Smooth & Crunchy bars pair silky smooth 70% dark chocolate with lots of irresistibly crunchy mix-ins!",
    para2: "",
  },
  {
    id: 6,
    query: "Smooth_Crunchy_Bars",
    title: "SMOOTH & CRUNCHY BARS",
    image: "/Images/Products/Smooth_Crunchy_BARS_banner.webp",
    para1:
      "Our NEW Smooth & Crunchy bars pair silky smooth 70% dark chocolate with lots of irresistibly crunchy mix-ins!",
    para2: "",
  },
];
export default function CollectionsProducts() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.product);
  console.log("data:", data);

  useEffect(() => {
    let payload = router.query.id;
    dispatch(getProduct(payload));
  }, [dispatch, router.query.id]);

  let appendData = collectionArr.filter(
    (item) => item.query === router.query.id
  );
  return (
    <>
    <Navbar/>
      <Box>
        {/* bread crumbs */}
        <BreadCrumbs
          query={router.query.id}
          details={{
            flag: false,
          }}
        />
        {/* <Box
          m="auto"
          bg=""
          h="50px"
          borderBottom="1px solid grey"
          borderTop="1px solid grey"
        >
          <Flex maxW="1099.99px" m="auto" pt="12px" boxSize="box-Border">
            <Breadcrumb
              p="0px 30px"
              fontFamily="sans-serif"
              // bg="red"
              spacing="8px"
              separator={<ChevronRightIcon color="#979797" />}
              fontSize="16px"
              color="gray.500"
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="/">HOME</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/collections">BUY</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontWeight="600">
                  {router.query.id}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </Box> */}

        {/* bread crumbs */}

        {/* Banner */}
        {appendData &&
          appendData.map((item, index) => (
            <Box key={index}>
              <Box
                w="100vw"
                h="320px"
                className={style.imageDiv}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {/* <Image h="320px" m="auto" src={item.image} alt={item.image} /> */}
                <Heading
                  as="h1"
                  fontSize={{ base: "38px", md: "60px" }}
                  className={style.imageHeading}
                >
                  {item.title}
                </Heading>
              </Box>
              <Box m="auto" mt="30px" bg="" maxW="920px" className={style.para}>
                <Heading as="h1">{item.para1}</Heading>
                <Heading as="h1">{item.para2}</Heading>
              </Box>
            </Box>
          ))}
        {/* Banner */}

        {/* Products Appends */}
        <SimpleGrid
          maxW="1099.98px"
          bg=""
          m="auto"
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing="0px"
          border="2px solid white"
        >
          {data &&
            data.map((item, index) => <ProductArr item={item} key={index} />)}
        </SimpleGrid>
        {/* Products Appends */}
      </Box>
      <ProductFooter />
      <ProductFooter2 />
      <Footer />
    </>
  );
}
