import { useEffect, useState } from "react";
import { Api } from "../../config/Api";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menus = await Api.getAllMenu();
        console.log(menus);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenu();
    setLoading(false);
  }, []);
  return (
    <div>
      <div>Hello World!</div>
    </div>
  );
}
