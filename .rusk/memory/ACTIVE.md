# Active

## Now
Double transition fixed. Removed `mode="wait"` (exit+enter now overlap) and stripped BlurFade wrappers from page.tsx + blog/page.tsx so the route transition is the only animation.

## Next
Verify transitions feel right in the browser — Home→Blog→post→back. All internal dock links now route through `useRouter().push`.

## Done
- Wrote `content/mclaren-p1-scroll-animation.mdx` in Gabriel's voice, then the canvas/frame pipeline from the mclaren repo
- Cover uses `/mclaren-p1.png`
- Blog feature left intact (only post data added)
