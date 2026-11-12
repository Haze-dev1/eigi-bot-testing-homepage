import type { SVGProps } from 'react'

/**
 * Placeholder illustrations — monoline SVG, 2.5px master stroke, no faces,
 * no hands, no shading. Paper ground plus exactly one accent shape each.
 *
 * Stroke width is locked with vector-effect="non-scaling-stroke" so the
 * master stroke stays 2.5 CSS px at every rendered size instead of being
 * scaled by the viewBox.
 */

const ACCENT = '#C0441C' // graphic accent — never used for body copy
const RULE = '#DAD3C4' // decorative hairlines only

type StrokeProps = SVGProps<SVGPathElement>

function Stroke(props: StrokeProps) {
  return (
    <path
      vectorEffect="non-scaling-stroke"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  )
}

/** Hairline annotation: dimension lines, ticks, seam marks. Decorative. */
function Hair(props: StrokeProps) {
  return (
    <path
      vectorEffect="non-scaling-stroke"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={RULE}
      {...props}
    />
  )
}

export function GarmentIllustration() {
  return (
    <svg
      className="illo illo--hero"
      viewBox="0 0 1600 1200"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Placeholder illustration: monoline technical drawing of a hooded garment, front view"
      fill="none"
      stroke="currentColor"
    >
      {/* One accent shape: the hood lining. */}
      <path
        d="M660 372 C 676 282 726 240 800 240 C 874 240 924 282 940 372 C 880 398 720 398 660 372 Z"
        fill={ACCENT}
        stroke="none"
      />

      {/* Hood */}
      <Stroke d="M560 372 C 575 245 700 175 800 175 C 900 175 1025 245 1040 372" />
      <Stroke d="M640 372 C 655 270 715 218 800 218 C 885 218 945 270 960 372" />
      <Stroke d="M640 372 C 700 404 900 404 960 372" />

      {/* Shoulders */}
      <Stroke d="M560 372 L 470 400" />
      <Stroke d="M1040 372 L 1130 400" />

      {/* Sleeves and cuffs */}
      <Stroke d="M470 400 C 430 470 405 560 392 700" />
      <Stroke d="M392 700 L 470 726" />
      <Stroke d="M470 400 C 500 424 522 452 540 480" />
      <Stroke d="M470 726 C 482 620 502 542 540 480" />

      <Stroke d="M1130 400 C 1170 470 1195 560 1208 700" />
      <Stroke d="M1208 700 L 1130 726" />
      <Stroke d="M1130 400 C 1100 424 1078 452 1060 480" />
      <Stroke d="M1130 726 C 1118 620 1098 542 1060 480" />

      {/* Body */}
      <Stroke d="M540 480 L 552 1010" />
      <Stroke d="M1060 480 L 1048 1010" />
      <Stroke d="M552 1010 L 1048 1010" />

      {/* Pocket */}
      <Stroke d="M665 765 L 700 905 Q 706 920 722 920 L 878 920 Q 894 920 900 905 L 935 765" />

      {/* Drawcords */}
      <Stroke d="M730 390 L 716 500" />
      <Stroke d="M870 390 L 884 500" />
      <circle cx="716" cy="506" r="6" fill="currentColor" stroke="none" />
      <circle cx="884" cy="506" r="6" fill="currentColor" stroke="none" />

      {/* Dimension annotations (decorative hairlines) */}
      <Hair d="M380 1090 L 1220 1090" />
      <Hair d="M552 1064 L 552 1116" />
      <Hair d="M1048 1064 L 1048 1116" />
      <Hair d="M552 1064 L 552 1030" />
      <Hair d="M1048 1064 L 1048 1030" />
      <Hair d="M300 400 L 300 1010" />
      <Hair d="M276 400 L 324 400" />
      <Hair d="M276 1010 L 324 1010" />
      <Hair d="M300 480 L 356 480" />
      <Hair d="M300 1010 L 356 1010" />
      <Hair d="M1320 175 L 1320 372" />
      <Hair d="M1296 175 L 1344 175" />
      <Hair d="M1296 372 L 1344 372" />
      <Hair d="M1240 175 L 1320 175" />
      <Hair d="M1240 372 L 1320 372" />
    </svg>
  )
}

export function PatternBandIllustration() {
  return (
    <svg
      className="illo illo--band"
      viewBox="0 0 2000 700"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Placeholder illustration: monoline technical drawing of garment pattern pieces laid flat"
      fill="none"
      stroke="currentColor"
    >
      {/* Sleeve piece */}
      <Stroke d="M170 140 L 520 140 L 575 540 L 205 540 Z" />
      <Hair d="M200 176 L 490 176 L 535 504 L 232 504 Z" strokeDasharray="12 10" />
      <Hair d="M372 200 L 372 470" />
      <Hair d="M352 240 L 372 200 L 392 240" />
      <Hair d="M352 430 L 372 470 L 392 430" />
      <Hair d="M170 140 L 148 140" />
      <Hair d="M520 140 L 542 140" />

      {/* Hood piece */}
      <Stroke d="M640 480 C 650 300 760 180 820 180 C 880 180 990 300 1000 480 C 920 522 720 522 640 480 Z" />
      <Hair d="M676 462 C 684 320 770 220 820 220 C 870 220 956 320 964 462" strokeDasharray="12 10" />
      <Hair d="M820 240 L 820 440" />
      <Hair d="M802 272 L 820 240 L 838 272" />
      <Hair d="M802 408 L 820 440 L 838 408" />

      {/* Body panel — one accent shape marks the centre front */}
      <Stroke d="M1120 140 C 1250 195 1410 195 1540 140 L 1580 570 L 1160 570 Z" />
      <Hair d="M1146 182 C 1258 232 1402 232 1514 182 L 1548 534 L 1192 534 Z" strokeDasharray="12 10" />
      <Hair d="M1350 200 L 1350 520" />
      <Hair d="M1332 230 L 1350 200 L 1368 230" />
      <Hair d="M1332 490 L 1350 520 L 1368 490" />
      <path d="M1312 330 L 1388 330 L 1388 390 L 1312 390 Z" fill={ACCENT} stroke="none" />

      {/* Rib strip */}
      <Stroke d="M1680 220 L 1930 220 L 1930 300 L 1680 300 Z" />
      <Hair d="M1706 220 L 1706 300" />
      <Hair d="M1732 220 L 1732 300" />
      <Hair d="M1758 220 L 1758 300" />
      <Hair d="M1784 220 L 1784 300" />
      <Hair d="M1810 220 L 1810 300" />
      <Hair d="M1836 220 L 1836 300" />
      <Hair d="M1862 220 L 1862 300" />
      <Hair d="M1888 220 L 1888 300" />
      <Hair d="M1914 220 L 1914 300" />

      {/* Scale bar */}
      <Hair d="M120 640 L 1930 640" />
      <Hair d="M120 624 L 120 656" />
      <Hair d="M560 630 L 560 650" />
      <Hair d="M1000 624 L 1000 656" />
      <Hair d="M1440 630 L 1440 650" />
      <Hair d="M1930 624 L 1930 656" />
    </svg>
  )
}
