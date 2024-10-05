
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className={'bg-[#303030]'}>
      <div className={'max-w-[1300px] mx-auto p-2'}>
      <div className={' text-white flex justify-between  gap-5 items-center'}>
        <Link>KompyuterlarTelefonlar</Link>
        <Link>Telefonlar</Link>
        <Link>Aksessuarlar</Link>
        <Link>Akustika</Link>
        <Link>Lenova</Link>
        <Link>HP</Link>
        <Link>Dell</Link>
        <Link>Mac</Link>
        <Link>iPhone</Link>
        <Link>Samsung</Link>
        <Link>Xiaomi</Link>
        <Link>Huawei</Link>
        <Link>iPad</Link>
        <Link>Galaxy Tab</Link>
        <Link>Xiaomi Pad</Link>
      </div>
      </div>
    </div>
  );
}

export default Navbar;