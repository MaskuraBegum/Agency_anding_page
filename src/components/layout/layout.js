// Frame 1: Vertical + extended horizontal lines
export const frame = `
  relative
  mx-auto
  w-[calc(100%-32px)]
  sm:w-[calc(100%-48px)]
  lg:w-[calc(100%-96px)]
  max-w-[1240px]
  before:z-10
  after:z-10
  before:content-['']
  before:absolute
  before:top-0
  before:left-1/2
  before:-translate-x-1/2
  before:w-[1300px]
  before:h-px
  before:bg-white/20
  before:pointer-events-none

  after:content-['']
  after:absolute
  after:bottom-0
  after:left-1/2
  after:-translate-x-1/2
  after:w-[1480px]
  after:h-px
  after:bg-white/20
  after:pointer-events-none
`;

// Frame 2: Only vertical borders
export const frame2 = `
  mx-auto
  w-[calc(100%-32px)]
  sm:w-[calc(100%-48px)]
  lg:w-[calc(100%-96px)]
  max-w-[1240px]
  border-x
  border-white/20
`;
// Frame 3: Top horizontal line + vertical borders
export const frame3 = `
  relative
  mx-auto
  w-[calc(100%-32px)]
  sm:w-[calc(100%-48px)]
  lg:w-[calc(100%-96px)]
  max-w-[1240px]
  border-x
  border-white/20
  before:z-10
  after:z-10
  before:content-['']
  before:absolute
  before:top-0
  before:left-1/2
  before:-translate-x-1/2
  before:w-[1480px]
  before:h-px
  before:bg-white/20
  before:pointer-events-none
`;

// Frame 4: Bottom horizontal line + vertical borders
export const frame4 = `
  relative
  mx-auto
  w-[calc(100%-32px)]
  sm:w-[calc(100%-48px)]
  lg:w-[calc(100%-96px)]
  max-w-[1240px]
  border-x
  border-white/20

  after:content-['']
  after:absolute
  after:bottom-0
  after:left-1/2
  after:-translate-x-1/2
  after:w-[1480px]
  after:h-px
  after:bg-white/20
  after:pointer-events-none
`;
export const frame5 = `
  relative
  mx-auto
  w-[calc(100%-32px)]
  sm:w-[calc(100%-48px)]
  lg:w-[calc(100%-96px)]
  max-w-[1240px]

  before:content-['']
  before:absolute
  before:top-0
  before:left-1/2
  before:-translate-x-1/2
  before:w-[1480px]
  before:h-px
  before:bg-white/20
  before:pointer-events-none

  after:content-['']
  after:absolute
  after:bottom-0
  after:left-1/2
  after:-translate-x-1/2
  after:w-[1480px]
  after:h-px
  after:bg-white/20
  after:pointer-events-none
`;
export const frame6 = `
  relative
  mx-auto
  w-[calc(100%-32px)]
  sm:w-[calc(100%-48px)]
  lg:w-[calc(100%-96px)]
  max-w-[1240px]
  border-x
  border-white/20

  before:content-['']
  before:absolute
  before:top-0
  before:left-1/2
  before:-translate-x-1/2
  before:w-[1480px]
  before:h-px
  before:bg-white/20
  before:pointer-events-none
  before:z-20
`;

// Inner frame: full width of its parent, only extended horizontal lines (no vertical borders)
export const frameInner = `
 relative
  w-full
  border-t
  border-white/20

  after:content-['']
  after:absolute
  after:bottom-0
  after:left-1/2
  after:-translate-x-1/2
  after:w-[1480px]
  after:h-px
  after:bg-white/20
  after:pointer-events-none
  after:z-20
`;
// Extended line at the top of any element
export const extTop = `
  relative
  before:content-['']
  before:absolute
  before:top-0
  before:left-1/2
  before:-translate-x-1/2
  before:w-[1480px]
  before:h-px
  before:bg-white/20
  before:pointer-events-none
  before:z-20
`;

// Extended line at the bottom of any element
export const extBottom = `
  relative
  after:content-['']
  after:absolute
  after:bottom-0
  after:left-1/2
  after:-translate-x-1/2
  after:w-[1480px]
  after:h-px
  after:bg-white/20
  after:pointer-events-none
  after:z-20
`;
export const inset = "px-[41px]";