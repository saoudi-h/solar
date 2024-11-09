/* GENERATED FILE */
import React from "react"
import { forwardRef } from "react"
import IconBase from "../../../lib/IconBase"
import type { IconProps, Icon } from "../../../lib/types"

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkYiIC8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy4xOTIyNSA5LjE2NTg5QzIuOTA1MDggMTAuMDU5IDIuNzUgMTEuMDExNCAyLjc1IDEyQzIuNzUgMTIuNDMyNyAyLjc3OTcyIDEyLjg1ODUgMi44MzcyMiAxMy4yNzU1QzIuODc0MDUgMTMuMjY3MyAyLjkxMTk3IDEzLjI2MTkgMi45NTA3NyAxMy4yNTkzTDIuOTk5OTggMTQuMDA3NUMyLjk1MDc3IDEzLjI1OTMgMi45NTA1NiAxMy4yNTkzIDIuOTUwNzcgMTMuMjU5M0wyLjk1MjY1IDEzLjI1OTJMMi45NTUyOSAxMy4yNTlMMi45NjI4OCAxMy4yNTg2TDIuOTg3MTIgMTMuMjU3M0MzLjAwNzI2IDEzLjI1NjMgMy4wMzUzMiAxMy4yNTUxIDMuMDcwOTcgMTMuMjUzOUMzLjE0MjI3IDEzLjI1MTYgMy4yNDM5NSAxMy4yNDk2IDMuMzczMzQgMTMuMjUwMUMzLjYzMjA0IDEzLjI1MTEgNC4wMDE5NiAxMy4yNjI0IDQuNDYxNDggMTMuMzAyNUM1LjM3OTg5IDEzLjM4MjcgNi42NjA0OSAxMy41Nzg1IDguMTI4MzIgMTQuMDQwM0M4LjU3ODk1IDE0LjE4MjEgOS4wMjcxNiAxNC40MTM3IDkuNDU1MzUgMTQuNjQ1OUM5LjU1NDkyIDE0LjY5OTggOS42NTQwOCAxNC43NTQyIDkuNzUzNjUgMTQuODA4OUMxMC4xMDAxIDE0Ljk5ODkgMTAuNDUxMiAxNS4xOTE2IDEwLjg0MDYgMTUuMzc4M0MxMS44MjA1IDE1Ljg0ODIgMTIuOTg1MyAxNi4yNSAxNC41MDkzIDE2LjI1QzE3LjMzMzEgMTYuMjUgMTkuNTYzNSAxNS4xOTA0IDIwLjg2OTggMTQuMzY1OEMyMC44OTgyIDE0LjM0NzkgMjAuOTI3NCAxNC4zMzIxIDIwLjk1NzEgMTQuMzE4NEMyMS4xNDgzIDEzLjU3NzUgMjEuMjUgMTIuODAwNiAyMS4yNSAxMkMyMS4yNSAxMC44NTYzIDIxLjA0MjQgOS43NjExNiAyMC42NjMgOC43NTAwNkMyMC40NjM1IDguNzUwOTQgMjAuMTY2IDguNzYwNSAxOS43ODk2IDguNzk2MzFDMTkuMDM1OSA4Ljg2ODAyIDE3Ljk3IDkuMDQ0NjUgMTYuNzQzMiA5LjQ2NTIxQzE2LjQ4IDkuNTU1NDMgMTYuMTc5OSA5LjcxNzY2IDE1Ljc4NTEgOS45NTA5QzE1LjcwNTcgOS45OTc3OCAxNS42MjI4IDEwLjA0NzQgMTUuNTM2NSAxMC4wOTlDMTUuMjE0MyAxMC4yOTE2IDE0Ljg0NjMgMTAuNTExNyAxNC40NDkxIDEwLjcxOTNDMTMuNDE5MSAxMS4yNTc1IDEyLjEyNjQgMTEuNzUgMTAuNDM3MiAxMS43NUM4LjAxOTA5IDExLjc1IDYuMDMwNjEgMTAuOTQ2MyA0LjY1NjMyIDEwLjE1MzVDNC4wNDc1OSA5LjgwMjM0IDMuNTU0NjMgOS40NTA2OSAzLjE5MjI1IDkuMTY1ODlaTTMuNzk2ODkgNy43MjEzOEMzLjg1NTc2IDcuNzcyMjUgMy45MjQxOCA3LjgyOTg1IDQuMDAxODUgNy44OTI4OEM0LjMyMjMyIDguMTUyOTYgNC43OTc1IDguNTAzMjUgNS40MDU4NCA4Ljg1NDE4QzYuNjI1MTQgOS41NTc1NCA4LjM1NTI0IDEwLjI1IDEwLjQzNzIgMTAuMjVDMTEuODEwOCAxMC4yNSAxMi44NjIzIDkuODU1OTQgMTMuNzU0NCA5LjM4OThDMTQuMTA5NSA5LjIwNDI2IDE0LjQyOTMgOS4wMTMxMyAxNC43NDY5IDguODIzMjlDMTQuODM4NiA4Ljc2ODUxIDE0LjkzIDguNzEzODMgMTUuMDIyMSA4LjY1OTQzQzE1LjQxNDQgOC40Mjc3MiAxNS44MzI4IDguMTkxNjMgMTYuMjU2OCA4LjA0NjI4QzE3LjYxMjkgNy41ODEzOCAxOC43OTcgNy4zODM5OSAxOS42NDc1IDcuMzAzMDVDMTkuNzU1NiA3LjI5Mjc3IDE5Ljg1ODMgNy4yODQzNyAxOS45NTUzIDcuMjc3NTNDMTguMzQyNiA0LjU2NjU0IDE1LjM4MzQgMi43NSAxMiAyLjc1QzguNDM1MDkgMi43NSA1LjM0MTE5IDQuNzY2NjUgMy43OTY4OSA3LjcyMTM4Wk0yMC4wODUzIDE2LjQ5NjlDMTguNjQ4MSAxNy4xNjM0IDE2Ljc0OCAxNy43NSAxNC41MDkzIDE3Ljc1QzEyLjY5NjEgMTcuNzUgMTEuMzA2NiAxNy4yNjUzIDEwLjE5MjEgMTYuNzMwOEM5Ljc2MTgyIDE2LjUyNDUgOS4zNjM2NyAxNi4zMDYgOS4wMTI3NyAxNi4xMTM0QzguOTE4NDcgMTYuMDYxNyA4LjgyNzU4IDE2LjAxMTggOC43NDA0IDE1Ljk2NDVDOC4zMTEwMSAxNS43MzE3IDcuOTc2MjQgMTUuNTY1IDcuNjc4MTMgMTUuNDcxMkM2LjMzMTYxIDE1LjA0NzUgNS4xNjA2MSAxNC44NjkzIDQuMzMwOTggMTQuNzk2OEMzLjkxNjQ5IDE0Ljc2MDYgMy41ODgzIDE0Ljc1MDkgMy4zNjczOCAxNC43NTAxQzMuMjg0OTcgMTQuNzQ5NyAzLjIxNzU1IDE0Ljc1MDYgMy4xNjYyMyAxNC43NTE4QzQuMzM3NzUgMTguNTE2NiA3Ljg0OTY3IDIxLjI1IDEyIDIxLjI1QzE1LjQ3NjQgMjEuMjUgMTguNTA1IDE5LjMzMjIgMjAuMDg1MyAxNi40OTY5Wk0xLjI1IDEyQzEuMjUgNi4wNjI5NCA2LjA2Mjk0IDEuMjUgMTIgMS4yNUMxNy45MzcxIDEuMjUgMjIuNzUgNi4wNjI5NCAyMi43NSAxMkMyMi43NSAxNy45MzcxIDE3LjkzNzEgMjIuNzUgMTIgMjIuNzVDNi4wNjI5NCAyMi43NSAxLjI1IDE3LjkzNzEgMS4yNSAxMloiIGZpbGw9IiMxQzI3NEMiLz4KPC9zdmc+Cg==)
 */
export const Planet3:Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.19225 9.16589C2.90508 10.059 2.75 11.0114 2.75 12C2.75 12.4327 2.77972 12.8585 2.83722 13.2755C2.87405 13.2673 2.91197 13.2619 2.95077 13.2593L2.99998 14.0075C2.95077 13.2593 2.95056 13.2593 2.95077 13.2593L2.95265 13.2592L2.95529 13.259L2.96288 13.2586L2.98712 13.2573C3.00726 13.2563 3.03532 13.2551 3.07097 13.2539C3.14227 13.2516 3.24395 13.2496 3.37334 13.2501C3.63204 13.2511 4.00196 13.2624 4.46148 13.3025C5.37989 13.3827 6.66049 13.5785 8.12832 14.0403C8.57895 14.1821 9.02716 14.4137 9.45535 14.6459C9.55492 14.6998 9.65408 14.7542 9.75365 14.8089C10.1001 14.9989 10.4512 15.1916 10.8406 15.3783C11.8205 15.8482 12.9853 16.25 14.5093 16.25C17.3331 16.25 19.5635 15.1904 20.8698 14.3658C20.8982 14.3479 20.9274 14.3321 20.9571 14.3184C21.1483 13.5775 21.25 12.8006 21.25 12C21.25 10.8563 21.0424 9.76116 20.663 8.75006C20.4635 8.75094 20.166 8.7605 19.7896 8.79631C19.0359 8.86802 17.97 9.04465 16.7432 9.46521C16.48 9.55543 16.1799 9.71766 15.7851 9.9509C15.7057 9.99778 15.6228 10.0474 15.5365 10.099C15.2143 10.2916 14.8463 10.5117 14.4491 10.7193C13.4191 11.2575 12.1264 11.75 10.4372 11.75C8.01909 11.75 6.03061 10.9463 4.65632 10.1535C4.04759 9.80234 3.55463 9.45069 3.19225 9.16589ZM3.79689 7.72138C3.85576 7.77225 3.92418 7.82985 4.00185 7.89288C4.32232 8.15296 4.7975 8.50325 5.40584 8.85418C6.62514 9.55754 8.35524 10.25 10.4372 10.25C11.8108 10.25 12.8623 9.85594 13.7544 9.3898C14.1095 9.20426 14.4293 9.01313 14.7469 8.82329C14.8386 8.76851 14.93 8.71383 15.0221 8.65943C15.4144 8.42772 15.8328 8.19163 16.2568 8.04628C17.6129 7.58138 18.797 7.38399 19.6475 7.30305C19.7556 7.29277 19.8583 7.28437 19.9553 7.27753C18.3426 4.56654 15.3834 2.75 12 2.75C8.43509 2.75 5.34119 4.76665 3.79689 7.72138ZM20.0853 16.4969C18.6481 17.1634 16.748 17.75 14.5093 17.75C12.6961 17.75 11.3066 17.2653 10.1921 16.7308C9.76182 16.5245 9.36367 16.306 9.01277 16.1134C8.91847 16.0617 8.82758 16.0118 8.7404 15.9645C8.31101 15.7317 7.97624 15.565 7.67813 15.4712C6.33161 15.0475 5.16061 14.8693 4.33098 14.7968C3.91649 14.7606 3.5883 14.7509 3.36738 14.7501C3.28497 14.7497 3.21755 14.7506 3.16623 14.7518C4.33775 18.5166 7.84967 21.25 12 21.25C15.4764 21.25 18.505 19.3322 20.0853 16.4969ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill="currentColor"/>
    </IconBase>
))

Planet3.displayName = "Planet3"