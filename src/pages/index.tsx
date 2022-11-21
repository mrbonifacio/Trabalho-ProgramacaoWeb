import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, CallMe, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>I'm Batman</Name>
        <Function>"You cannot change the world alone!"</Function>
        <Intro>Unlike most superheroes, Batman does not have superpowers; so, in his war against crime, he uses his genius intellect, his martial arts expertise and his physical dexterity as well as his wealth, which guarantees him a huge arsenal of weapons and state-of-the-art equipment.
        </Intro>
        <Link href="contact">
          <CallMe>Call me!<FaArrowRight /></CallMe>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.gif" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}