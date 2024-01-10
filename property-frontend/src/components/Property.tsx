interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
}

interface Features {
  rooms: string;
  bedrooms: string;
  bathrooms: string;
  netarea: string;
  yearbuilt: number;
  parking: string;
  additional: string;
}

interface Property {
  id: number;
  price: string;
  image: string;
  description: string;
  address: Address;
  features: Features;
}

interface Props {
  home: Property;
}

const Property = ({ home }: Props) => {
  home.address;

  return (
    <>
      <h1>Property</h1>
      <h4>"123"</h4>
    </>
  );
};

export default Property;
