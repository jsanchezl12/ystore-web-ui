interface CategoryProps {
  params: {
    category: string;
    searchParams?: any;
  };
}
export default function Category(props: CategoryProps) {
  console.log(props);
  const { category } = props.params;
  console.log(category);

  return (
    <main>
      {category ?
        <h1>Dynamic Category {category}</h1>
        :
        <h1>Store</h1>
      }
    </main>
  );
}