import styled from "styled-components";
import logo from "../../assets/logo.png";

const FooterContainer = styled.footer`
  background-color: #d2c4b6;
  padding: 3rem 2rem;
  color: #333;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Logo = styled.img`
  height: 50px;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <img src={logo} className="w-40" />
          <p>
            Aromax Coffee is dedicated to bringing you the finest Ethiopian
            coffee, sustainably grown and expertly roasted.
          </p>
        </FooterColumn>
        <FooterColumn>
          <h4>About Us</h4>
          <FooterLink href="/our-story">Our Story</FooterLink>
          <FooterLink href="/our-coffee">Our Coffee</FooterLink>
          <FooterLink href="/sustainability">Sustainability</FooterLink>
          <FooterLink href="/careers">Careers</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <h4>Customer Service</h4>
          <FooterLink href="/contact-us">Contact Us</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
          <FooterLink href="/shipping">Shipping & Returns</FooterLink>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <h4>Follow Us</h4>
          <FooterLink href="https://www.facebook.com">Facebook</FooterLink>
          <FooterLink href="https://www.instagram.com">Instagram</FooterLink>
          <FooterLink href="https://www.twitter.com">Twitter</FooterLink>
          <FooterLink href="https://www.linkedin.com">LinkedIn</FooterLink>
        </FooterColumn>
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()} Aromax Coffee. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
