import { FooterArea } from './styles';

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <FooterArea>
      <p>© {year} | Todo App. | Todos os direitos reservados</p>
    </FooterArea>
  );
}
