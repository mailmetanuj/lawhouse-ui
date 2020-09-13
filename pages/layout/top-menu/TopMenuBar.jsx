import { MenuItems } from "./MenuItems";
import MenuItem from "./MenuItem";

export default function TopMenuBar(props) {
  return (
    <>
      {MenuItems.map((item) => {
        return (
          <MenuItem
            key={item.id}
            label={item.label}
            subMenus={item.subMenus}
            navigate={props.navigate}
            navPage={item.page}
          />
        );
      })}
    </>
  );
}
