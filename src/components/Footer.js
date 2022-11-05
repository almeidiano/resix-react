import SamLogo from './SamLogo.svg';

export const Footer = () => {
  return (
    <footer>
        <div className='container footer'>
          <span>Developed by <a target="_blank" href="https://samuelalmeidadev.com.br/portfolio-tecnico"><img src={SamLogo} alt="Samuel Logo" /></a></span>
        </div>
        <span class='version'>v1.1</span>
    </footer>
  )
}

export default Footer;
