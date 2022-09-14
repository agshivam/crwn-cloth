//import CategoryItem from './componenets/category-item/category-item.component.jsx'
import Directory from './componenets/directory/directory.component';

const App= () =>  {

  const categories =[
    {
      id: 1,
      title: 'Hats',
      imageurl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'Jackets',
      imageurl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'Womens',
      imageurl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },{
      id: 5,
      title: 'mens',
      imageurl: 'https://i.ibb.co/R70vBrQ/men.png'
    },
  ];

  return    <Directory categories={categories}/>;
   };

export default App;
