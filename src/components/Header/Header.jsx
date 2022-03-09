import { HeaderArea } from './styles';
import { Button } from '../../styles/globalComponents';

export default function Header({ changeTheme, theme }) {
  const switchTheme = () => {
    changeTheme(!theme);
  };

  return (
    <HeaderArea>
      <div className='container'>
        <div className='title'>TODO APP.</div>
        <Button 
          round={4} 
          onClick={switchTheme} 
          width={80} 
          height={30}
        >
          {theme ? 'LIGHT' : 'DARK'}
        </Button>
      </div>
    </HeaderArea>
  );
}
