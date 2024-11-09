/* GENERATED FILE */
import React from "react"
import { forwardRef } from "react"
import IconBase from "../../../lib/IconBase"
import type { IconProps, Icon } from "../../../lib/types"

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkYiIC8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNjYyOCAzLjI1TDEzLjM5NjIgMy4yNUMxNC40Nzc1IDMuMjQ5OTkgMTUuMzQzOCAzLjI0OTk4IDE2LjA1MzkgMy4zMjAyNEMxNi43ODkzIDMuMzkzIDE3LjQxMzggMy41NDUxMSAxOC4wMDE4IDMuODgyMDRDMTguNTg4NSA0LjIxODI2IDE5LjA0MTIgNC42ODI2NCAxOS40ODc1IDUuMjg0NjRDMTkuOTIwMSA1Ljg2ODA0IDIwLjM3ODEgNi42MjU3NCAyMC45NTIxIDcuNTc1NDVMMjEuNjcyMiA4Ljc2NjdDMjIuMTUxNyA5LjU1OTg2IDIyLjU0MDggMTAuMjAzNSAyMi44MDU1IDEwLjc2MzNDMjMuMDgxNSAxMS4zNDY3IDIzLjI1IDExLjg5MzUgMjMuMjUgMTIuNUMyMy4yNSAxMy4xMDY1IDIzLjA4MTUgMTMuNjUzMyAyMi44MDU1IDE0LjIzNjdDMjIuNTQwOCAxNC43OTY1IDIyLjE1MTcgMTUuNDQwMSAyMS42NzIyIDE2LjIzMzNMMjAuOTUyMSAxNy40MjQ2QzIwLjM3ODEgMTguMzc0MyAxOS45MjAxIDE5LjEzMiAxOS40ODc1IDE5LjcxNTRDMTkuMDQxMiAyMC4zMTc0IDE4LjU4ODUgMjAuNzgxNyAxOC4wMDE4IDIxLjExOEMxNy40MTM4IDIxLjQ1NDkgMTYuNzg5MyAyMS42MDcgMTYuMDUzOSAyMS42Nzk4QzE1LjM0MzggMjEuNzUgMTQuNDc3NSAyMS43NSAxMy4zOTYyIDIxLjc1SDEwLjY2MjhDOC43NzQ0OCAyMS43NSA3LjI3ODM3IDIxLjc1IDYuMTA3NDIgMjEuNTg3M0M0LjkwMDI0IDIxLjQxOTQgMy45MjgyNyAyMS4wNjU5IDMuMTY0ODQgMjAuMjc2NkMyLjQwNDggMTkuNDkwOCAyLjA2NzQ4IDE4LjQ5NjIgMS45MDY3NSAxNy4yNjAxQzEuNzQ5OTggMTYuMDU0NCAxLjc0OTk5IDE0LjUxMTggMS43NSAxMi41NTVWMTIuNDQ1QzEuNzQ5OTkgMTAuNDg4MiAxLjc0OTk4IDguOTQ1NTYgMS45MDY3NSA3LjczOTg4QzIuMDY3NDggNi41MDM4NSAyLjQwNDggNS41MDkyMiAzLjE2NDg0IDQuNzIzMzlDMy45MjgyNyAzLjkzNDA1IDQuOTAwMjQgMy41ODA1NSA2LjEwNzQyIDMuNDEyNzRDNy4yNzgzOCAzLjI0OTk3IDguNzc0NSAzLjI0OTk4IDEwLjY2MjggMy4yNVpNNi4zMTM5NSA0Ljg5ODQ2QzUuMjgyNDMgNS4wNDE4NSA0LjY4MzU2IDUuMzEwNzQgNC4yNDMwNSA1Ljc2NjIxQzMuNzk5MTQgNi4yMjUxNyAzLjUzNDQ5IDYuODU0NjggMy4zOTQyMyA3LjkzMzMxQzMuMjUxNDkgOS4wMzEwMiAzLjI1IDEwLjQ3NiAzLjI1IDEyLjVDMy4yNSAxNC41MjQgMy4yNTE0OSAxNS45NjkgMy4zOTQyMyAxNy4wNjY3QzMuNTM0NDkgMTguMTQ1MyAzLjc5OTE0IDE4Ljc3NDggNC4yNDMwNSAxOS4yMzM4QzQuNjgzNTYgMTkuNjg5MyA1LjI4MjQzIDE5Ljk1ODIgNi4zMTM5NSAyMC4xMDE1QzcuMzY5NjggMjAuMjQ4MyA4Ljc2MTQyIDIwLjI1IDEwLjcyMSAyMC4yNUgxMy4zNThDMTQuNDg2MyAyMC4yNSAxNS4yNzg1IDIwLjI0OTIgMTUuOTA2MiAyMC4xODdDMTYuNTE3IDIwLjEyNjYgMTYuOTE0MiAyMC4wMTIzIDE3LjI1NiAxOS44MTY1QzE3LjU5OSAxOS42MTk5IDE3LjkwNjIgMTkuMzI5NyAxOC4yODI2IDE4LjgyMkMxOC42NjggMTguMzAyMiAxOS4wOSAxNy42MDU1IDE5LjY4NzUgMTYuNjE3TDIwLjM2ODMgMTUuNDkwOEMyMC44NzI4IDE0LjY1NjIgMjEuMjIxNCAxNC4wNzc4IDIxLjQ0OTUgMTMuNTk1NEMyMS42NzAyIDEzLjEyODcgMjEuNzUgMTIuODA3NyAyMS43NSAxMi41QzIxLjc1IDEyLjE5MjMgMjEuNjcwMiAxMS44NzEzIDIxLjQ0OTUgMTEuNDA0NkMyMS4yMjE0IDEwLjkyMjIgMjAuODcyOCAxMC4zNDM4IDIwLjM2ODMgOS41MDkyNEwxOS42ODc1IDguMzgzQzE5LjA5IDcuMzk0NTIgMTguNjY4IDYuNjk3ODIgMTguMjgyNiA2LjE3Nzk4QzE3LjkwNjIgNS42NzAzIDE3LjU5OSA1LjM4MDA1IDE3LjI1NiA1LjE4MzVDMTYuOTE0MiA0Ljk4NzY2IDE2LjUxNyA0Ljg3MzM5IDE1LjkwNjIgNC44MTI5NUMxNS4yNzg1IDQuNzUwODQgMTQuNDg2MyA0Ljc1IDEzLjM1OCA0Ljc1SDEwLjcyMUM4Ljc2MTQyIDQuNzUgNy4zNjk2OCA0Ljc1MTcgNi4zMTM5NSA0Ljg5ODQ2Wk03LjUgNy4yNDUxMkM3LjkxNDIxIDcuMjQ1MTIgOC4yNSA3LjU4MDkgOC4yNSA3Ljk5NTEyVjE3QzguMjUgMTcuNDE0MiA3LjkxNDIxIDE3Ljc1IDcuNSAxNy43NUM3LjA4NTc5IDE3Ljc1IDYuNzUgMTcuNDE0MiA2Ljc1IDE3VjcuOTk1MTJDNi43NSA3LjU4MDkgNy4wODU3OSA3LjI0NTEyIDcuNSA3LjI0NTEyWiIgZmlsbD0iIzFDMjc0QyIvPgo8L3N2Zz4K)
 */
export const TagHorizontal:Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.6628 3.25L13.3962 3.25C14.4775 3.24999 15.3438 3.24998 16.0539 3.32024C16.7893 3.393 17.4138 3.54511 18.0018 3.88204C18.5885 4.21826 19.0412 4.68264 19.4875 5.28464C19.9201 5.86804 20.3781 6.62574 20.9521 7.57545L21.6722 8.7667C22.1517 9.55986 22.5408 10.2035 22.8055 10.7633C23.0815 11.3467 23.25 11.8935 23.25 12.5C23.25 13.1065 23.0815 13.6533 22.8055 14.2367C22.5408 14.7965 22.1517 15.4401 21.6722 16.2333L20.9521 17.4246C20.3781 18.3743 19.9201 19.132 19.4875 19.7154C19.0412 20.3174 18.5885 20.7817 18.0018 21.118C17.4138 21.4549 16.7893 21.607 16.0539 21.6798C15.3438 21.75 14.4775 21.75 13.3962 21.75H10.6628C8.77448 21.75 7.27837 21.75 6.10742 21.5873C4.90024 21.4194 3.92827 21.0659 3.16484 20.2766C2.4048 19.4908 2.06748 18.4962 1.90675 17.2601C1.74998 16.0544 1.74999 14.5118 1.75 12.555V12.445C1.74999 10.4882 1.74998 8.94556 1.90675 7.73988C2.06748 6.50385 2.4048 5.50922 3.16484 4.72339C3.92827 3.93405 4.90024 3.58055 6.10742 3.41274C7.27838 3.24997 8.7745 3.24998 10.6628 3.25ZM6.31395 4.89846C5.28243 5.04185 4.68356 5.31074 4.24305 5.76621C3.79914 6.22517 3.53449 6.85468 3.39423 7.93331C3.25149 9.03102 3.25 10.476 3.25 12.5C3.25 14.524 3.25149 15.969 3.39423 17.0667C3.53449 18.1453 3.79914 18.7748 4.24305 19.2338C4.68356 19.6893 5.28243 19.9582 6.31395 20.1015C7.36968 20.2483 8.76142 20.25 10.721 20.25H13.358C14.4863 20.25 15.2785 20.2492 15.9062 20.187C16.517 20.1266 16.9142 20.0123 17.256 19.8165C17.599 19.6199 17.9062 19.3297 18.2826 18.822C18.668 18.3022 19.09 17.6055 19.6875 16.617L20.3683 15.4908C20.8728 14.6562 21.2214 14.0778 21.4495 13.5954C21.6702 13.1287 21.75 12.8077 21.75 12.5C21.75 12.1923 21.6702 11.8713 21.4495 11.4046C21.2214 10.9222 20.8728 10.3438 20.3683 9.50924L19.6875 8.383C19.09 7.39452 18.668 6.69782 18.2826 6.17798C17.9062 5.6703 17.599 5.38005 17.256 5.1835C16.9142 4.98766 16.517 4.87339 15.9062 4.81295C15.2785 4.75084 14.4863 4.75 13.358 4.75H10.721C8.76142 4.75 7.36968 4.7517 6.31395 4.89846ZM7.5 7.24512C7.91421 7.24512 8.25 7.5809 8.25 7.99512V17C8.25 17.4142 7.91421 17.75 7.5 17.75C7.08579 17.75 6.75 17.4142 6.75 17V7.99512C6.75 7.5809 7.08579 7.24512 7.5 7.24512Z" fill="currentColor"/>
    </IconBase>
))

TagHorizontal.displayName = "TagHorizontal"