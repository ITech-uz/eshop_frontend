import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu.jsx";

const Category = ({category}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
          <NavigationMenuContent className={"!min-w-[150px] py-2 px-3 rounded"}>
            {
              category.sub_category.map((item, index) => (
                <NavigationMenuLink href={item.href} className={"cursor-pointer flex select-none"} key={index}>{item.title}</NavigationMenuLink>
              ))
            }
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Category;