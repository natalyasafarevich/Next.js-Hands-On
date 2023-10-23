import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from 'next/image';
import Img from  './man-avatar.jpg'


export default async function Profile() {
  const session = await getServerSession(authConfig); // Передайте `req`, если он не является частью `authConfig`

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      <Image
       src={Img}
       width={Img.width}
       height={Img.height}
       style={{objectFit:'contain'}}
       sizes="100vw"
       alt="Picture of the author"
      />
      {/* {session?.user?.image && <img src={session.user.image} alt="" />} */}
    </div>
  );
}
