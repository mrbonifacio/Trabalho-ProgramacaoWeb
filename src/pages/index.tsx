import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Batman</Name>
        <Function>"Você não pode mudar o mundo sozinho!"</Function>
        <Intro>Ao contrário da maior parte dos super-heróis, Batman não tem superpoderes; 
          assim, na sua guerra contra o crime, utiliza seu intelecto de gênio, sua perícia em artes marciais e sua destreza física
           — bem como sua riqueza, que lhe garante um enorme arsenal de armas e equipamentos de última geração.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}