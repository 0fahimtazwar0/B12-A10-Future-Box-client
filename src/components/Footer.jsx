import React from "react";
import logoImg from "/src/assets/book-haven-logo.png";

const Footer = () => {
  return (
    <footer className=' bg-neutral'>
      <div className='footer sm:footer-horizontal text-neutral-content p-10 max-w-(--max-width) mx-auto items-end'>
        <aside>
          <img src={logoImg} className='w-14 grayscale' />
          <p className='font-semibold'>
            Book Haven Inc Ltd.
            <br />
            <p className='opacity-60'>Where Stories Find Their Home</p>
          </p>
        </aside>
        <nav>
          <div className='grid grid-flow-col gap-4'>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 256 256'
              >
                <title>X-logo-duotone SVG Icon</title>
                <g fill='currentColor'>
                  <path d='M208 216h-48L48 40h48Z' opacity='.2' />
                  <path d='m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z' />
                </g>
              </svg>
            </a>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 256 256'
              >
                <title>Youtube-logo-duotone SVG Icon</title>
                <g fill='currentColor'>
                  <path
                    d='M226.59 71.53a16 16 0 0 0-9.63-11C183.48 47.65 128 48 128 48s-55.48-.35-89 12.58a16 16 0 0 0-9.63 11C27.07 80.54 24 98.09 24 128s3.07 47.46 5.41 56.47A16 16 0 0 0 39 195.42C72.52 208.35 128 208 128 208s55.48.35 89-12.58a16 16 0 0 0 9.63-10.95c2.34-9 5.41-26.56 5.41-56.47s-3.11-47.46-5.45-56.47M112 160V96l48 32Z'
                    opacity='.2'
                  />
                  <path d='m164.44 121.34l-48-32A8 8 0 0 0 104 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 145.05V111l25.58 17Zm114.33-75.53a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-15.49 113a8 8 0 0 1-4.77 5.49c-31.65 12.22-85.48 12-86.12 12s-54.37.18-86-12a8 8 0 0 1-4.77-5.49C34.8 173.39 32 156.57 32 128s2.8-45.39 5.16-54.47A8 8 0 0 1 41.93 68c31.65-12.18 85.47-12 86.12-12s54.37-.18 86 12a8 8 0 0 1 4.77 5.49C221.2 82.61 224 99.43 224 128s-2.8 45.39-5.16 54.47Z' />
                </g>
              </svg>
            </a>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 256 256'
              >
                <title>Facebook-logo-duotone SVG Icon</title>
                <g fill='currentColor'>
                  <path
                    d='M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96'
                    opacity='.2'
                  />
                  <path d='M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0' />
                </g>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
