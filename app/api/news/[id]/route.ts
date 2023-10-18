import {NextResponse} from "next/server"
import {headers, cookies} from 'next/headers';
import {redirect} from 'next/navigation';


export async function DELETE(req : Request, {
  params
} : {
  params : {
    id: string
  }
}) {
  const id = params.id


  // * read only
  const headersList = headers();
  const type = headersList.get('Content-Type');

  // / allow changing
  const cookiesList = cookies();
  const coo = cookiesList.get('Cookie_1') ?. value
  redirect('/news')
  // logic

  return NextResponse.json({id, type, coo})
}
