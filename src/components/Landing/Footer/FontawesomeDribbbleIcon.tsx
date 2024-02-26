import { memo, SVGProps } from 'react';

const FontawesomeDribbbleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.5469 2.6998C6.21213 2.6998 2.70002 6.24355 2.70002 10.5467C2.70002 14.8814 6.21213 18.3936 10.5469 18.3936C14.85 18.3936 18.3938 14.8814 18.3938 10.5467C18.3938 6.24355 14.85 2.6998 10.5469 2.6998ZM15.7043 6.33848C16.6535 7.47754 17.2231 8.93301 17.2231 10.515C17.0016 10.4518 14.7867 10.0088 12.5719 10.2936C12.3821 9.85059 12.2239 9.4709 11.9707 8.96465C14.4703 7.95215 15.5778 6.52832 15.7043 6.33848ZM14.9766 5.54746C14.85 5.7373 13.8375 7.09785 11.4645 7.98379C10.3571 5.95879 9.15471 4.31348 8.96487 4.06035C11.0848 3.5541 13.3313 4.09199 14.9766 5.54746ZM7.6676 4.50332C7.85745 4.75645 9.05979 6.40176 10.1672 8.39512C7.03479 9.21777 4.28206 9.21777 3.96565 9.18613C4.40862 7.12949 5.80081 5.38926 7.6676 4.50332ZM3.83909 10.5783C3.83909 10.515 3.83909 10.4518 3.83909 10.3568C4.12385 10.3885 7.38284 10.4201 10.7051 9.40762C10.9266 9.78731 11.0848 10.167 11.2746 10.5467C8.83831 11.2428 6.62346 13.2045 5.54768 15.0396C4.4719 13.8689 3.83909 12.2869 3.83909 10.5783ZM6.40198 15.8623C7.12971 14.4385 9.02815 12.5717 11.7176 11.6541C12.6668 14.0904 13.0465 16.1471 13.1414 16.7482C10.9899 17.6658 8.39534 17.4127 6.40198 15.8623ZM14.2805 16.1154C14.2172 15.7357 13.8375 13.774 12.9832 11.3377C15.0715 11.0213 16.9067 11.5592 17.1598 11.6225C16.8434 13.4893 15.7676 15.1029 14.2805 16.1154Z'
      fill='#111928'
    />
  </svg>
);

const Memo = memo(FontawesomeDribbbleIcon);
export { Memo as FontawesomeDribbbleIcon };