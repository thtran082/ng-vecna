type VnDocPages = VnDocPage[];

type VnDocPage = {
  route: string;
  keywords: string;
  title: string;
  section: string;
}

export const pages: VnDocPages = [
  {
    section: `Components`,
    keywords: `button, icon-button`,
    route: `/components/button`,
    title: `Button`,
  }
]