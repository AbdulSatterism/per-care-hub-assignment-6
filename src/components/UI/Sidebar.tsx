import { Button } from "@nextui-org/button";

const Sidebar = () => {
  return (
    <aside className="w-64 hidden md:block">
      <nav className="space-y-2">
        <Button className="w-full justify-start">Home</Button>
        <Button className="w-full justify-start">Profile</Button>
        <Button className="w-full justify-start">Messages</Button>
        <Button className="w-full justify-start">Notifications</Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
