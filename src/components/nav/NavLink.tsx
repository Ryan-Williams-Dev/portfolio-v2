import { Link } from "@chakra-ui/react";

type NavbarLink = {
  label: string,
  route: string
}

export default function NavLink({ label, route }: NavbarLink) {

  return(
    <Link
      href={route}
      fontSize='md'
    >{label}</Link>
  )
}