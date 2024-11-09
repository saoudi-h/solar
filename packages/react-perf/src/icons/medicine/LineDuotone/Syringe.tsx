/* GENERATED FILE */
import React from "react"
import { forwardRef } from "react"
import IconBase from "../../../lib/IconBase"
import type { IconProps, Icon } from "../../../lib/types"

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkYiIC8+CjxwYXRoIGQ9Ik02LjE4MjAxIDEwLjU0NTVMNi43MTIzNCAxMS4wNzU4TDYuMTgyMDEgMTAuNTQ1NVpNMTMuNDU0NyAxNy44MTgyTDEzLjk4NTEgMTguMzQ4NUwxMy40NTQ3IDE3LjgxODJaTTE3LjczNzYgOS4wMTAxTDE3LjIwNzIgOS41NDA0M0wxNy43Mzc2IDkuMDEwMVpNMTkuMDI0MSAxMC41NjkyTDE5LjcyODkgMTAuMzEyN0wxOS4wMjQxIDEwLjU2OTJaTTE3LjczNzYgMTMuNTM1NEwxNy4yMDcyIDEzLjAwNUwxNy43Mzc2IDEzLjUzNTRaTTE5LjAyNDEgMTEuOTc2M0wxOS43Mjg5IDEyLjIzMjhMMTkuMDI0MSAxMS45NzYzWk0xNC45OTAxIDYuMjYyNjNMMTUuNTIwNCA1LjczMjNMMTQuOTkwMSA2LjI2MjYzWk0xMy40MzEgNC45NzYxMUwxMy4xNzQ1IDUuNjgwODhMMTMuNDMxIDQuOTc2MTFaTTEwLjQ2NDggNi4yNjI2M0wxMC45OTUyIDYuNzkyOTZWNi43OTI5NkwxMC40NjQ4IDYuMjYyNjNaTTEyLjAyMzkgNC45NzYxMUwxMi4yODA0IDUuNjgwODhMMTIuMDIzOSA0Ljk3NjExWk0xOS40Njk5IDcuNDM5NDJDMTkuNzYyOCA3LjczMjMxIDIwLjIzNzYgNy43MzIzMSAyMC41MzA1IDcuNDM5NDJDMjAuODIzNCA3LjE0NjUzIDIwLjgyMzQgNi42NzE2NSAyMC41MzA1IDYuMzc4NzZMMTkuNDY5OSA3LjQzOTQyWk0xNy42MjE0IDMuNDY5NjdDMTcuMzI4NSAzLjE3Njc4IDE2Ljg1MzcgMy4xNzY3OCAxNi41NjA4IDMuNDY5NjdDMTYuMjY3OSAzLjc2MjU2IDE2LjI2NzkgNC4yMzc0NCAxNi41NjA4IDQuNTMwMzNMMTcuNjIxNCAzLjQ2OTY3Wk0xNC40NTk4IDYuNzkyOTZMMTcuMjA3MiA5LjU0MDQzTDE4LjI2NzkgOC40Nzk3N0wxNS41MjA0IDUuNzMyM0wxNC40NTk4IDYuNzkyOTZaTTE3LjIwNzIgMTMuMDA1TDEyLjkyNDQgMTcuMjg3OUwxMy45ODUxIDE4LjM0ODVMMTguMjY3OSAxNC4wNjU3TDE3LjIwNzIgMTMuMDA1Wk02LjcxMjM0IDExLjA3NThMMTAuOTk1MiA2Ljc5Mjk2TDkuOTM0NTEgNS43MzIzTDUuNjUxNjggMTAuMDE1MUw2LjcxMjM0IDExLjA3NThaTTYuNzEyMzQgMTcuMjg3OUM0Ljk5NjkzIDE1LjU3MjQgNC45OTY5MyAxMi43OTEyIDYuNzEyMzQgMTEuMDc1OEw1LjY1MTY4IDEwLjAxNTFDMy4zNTA0OCAxMi4zMTYzIDMuMzUwNDggMTYuMDQ3MyA1LjY1MTY4IDE4LjM0ODVMNi43MTIzNCAxNy4yODc5Wk0xMi45MjQ0IDE3LjI4NzlDMTEuMjA5IDE5LjAwMzMgOC40Mjc3NiAxOS4wMDMzIDYuNzEyMzQgMTcuMjg3OUw1LjY1MTY4IDE4LjM0ODVDNy45NTI4OCAyMC42NDk3IDExLjY4MzkgMjAuNjQ5NyAxMy45ODUxIDE4LjM0ODVMMTIuOTI0NCAxNy4yODc5Wk0xNy4yMDcyIDkuNTQwNDNDMTcuNTkyMiA5LjkyNTM2IDE3Ljg1MSAxMC4xODQ5IDE4LjAzNjEgMTAuNDAwM0MxOC4yMTYxIDEwLjYwOTkgMTguMjg1MiAxMC43MzE5IDE4LjMxOTMgMTAuODI1N0wxOS43Mjg5IDEwLjMxMjdDMTkuNjA3IDkuOTc3OTIgMTkuNDA5NyA5LjY5NzI4IDE5LjE3MzggOS40MjI4MUMxOC45NDMxIDkuMTU0MjggMTguNjM2NyA4Ljg0ODU0IDE4LjI2NzkgOC40Nzk3N0wxNy4yMDcyIDkuNTQwNDNaTTE4LjI2NzkgMTQuMDY1N0MxOC42MzY3IDEzLjY5NjkgMTguOTQzMSAxMy4zOTEyIDE5LjE3MzggMTMuMTIyNkMxOS40MDk3IDEyLjg0ODIgMTkuNjA3IDEyLjU2NzUgMTkuNzI4OSAxMi4yMzI4TDE4LjMxOTMgMTEuNzE5OEMxOC4yODUyIDExLjgxMzYgMTguMjE2MSAxMS45MzU2IDE4LjAzNjEgMTIuMTQ1MUMxNy44NTEgMTIuMzYwNiAxNy41OTIyIDEyLjYyMDEgMTcuMjA3MiAxMy4wMDVMMTguMjY3OSAxNC4wNjU3Wk0xOC4zMTkzIDEwLjgyNTdDMTguNDI0NCAxMS4xMTQ1IDE4LjQyNDQgMTEuNDMxIDE4LjMxOTMgMTEuNzE5OEwxOS43Mjg5IDEyLjIzMjhDMTkuOTU0NiAxMS42MTI2IDE5Ljk1NDYgMTAuOTMyOCAxOS43Mjg5IDEwLjMxMjdMMTguMzE5MyAxMC44MjU3Wk0xNS41MjA0IDUuNzMyM0MxNS4xNTE3IDUuMzYzNTMgMTQuODQ1OSA1LjA1NzA4IDE0LjU3NzQgNC44MjYzNkMxNC4zMDI5IDQuNTkwNTMgMTQuMDIyMyA0LjM5MzE3IDEzLjY4NzUgNC4yNzEzNEwxMy4xNzQ1IDUuNjgwODhDMTMuMjY4MyA1LjcxNTAxIDEzLjM5MDMgNS43ODQwNyAxMy41OTk4IDUuOTY0MDhDMTMuODE1MyA2LjE0OTIgMTQuMDc0OCA2LjQwODAyIDE0LjQ1OTggNi43OTI5NkwxNS41MjA0IDUuNzMyM1pNMTAuOTk1MiA2Ljc5Mjk2QzExLjM4MDEgNi40MDgwMiAxMS42Mzk2IDYuMTQ5MiAxMS44NTUxIDUuOTY0MDhDMTIuMDY0NiA1Ljc4NDA3IDEyLjE4NjYgNS43MTUwMSAxMi4yODA0IDUuNjgwODhMMTEuNzY3NCA0LjI3MTM0QzExLjQzMjcgNC4zOTMxNyAxMS4xNTIgNC41OTA1MyAxMC44Nzc1IDQuODI2MzZDMTAuNjA5IDUuMDU3MDggMTAuMzAzMyA1LjM2MzUzIDkuOTM0NTEgNS43MzIzTDEwLjk5NTIgNi43OTI5NlpNMTMuNjg3NSA0LjI3MTM0QzEzLjA2NzQgNC4wNDU2MiAxMi4zODc1IDQuMDQ1NjIgMTEuNzY3NCA0LjI3MTM0TDEyLjI4MDQgNS42ODA4OEMxMi41NjkyIDUuNTc1NzggMTIuODg1NyA1LjU3NTc4IDEzLjE3NDUgNS42ODA4OEwxMy42ODc1IDQuMjcxMzRaTTE4LjAxNTMgNS45ODQ4OEwxOS40Njk5IDcuNDM5NDJMMjAuNTMwNSA2LjM3ODc2TDE5LjA3NiA0LjkyNDIyTDE4LjAxNTMgNS45ODQ4OFpNMTkuMDc2IDQuOTI0MjJMMTcuNjIxNCAzLjQ2OTY3TDE2LjU2MDggNC41MzAzM0wxOC4wMTUzIDUuOTg0ODhMMTkuMDc2IDQuOTI0MjJaIiBmaWxsPSIjMUMyNzRDIi8+CjxwYXRoIGQ9Ik0xNy4wOTExIDE0LjE4MTlMOS44MTgzNiA2LjkwOTE4IiBzdHJva2U9IiMxQzI3NEMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNNi4xODE4MiAxNy44MTg0TDQgMjAuMDAwMiIgc3Ryb2tlPSIjMUMyNzRDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZD0iTTE1LjgzMyA3LjEwNjA4QzE1LjU0MDEgNy4zOTg5NyAxNS41NDAxIDcuODczODQgMTUuODMzIDguMTY2NzRDMTYuMTI1OCA4LjQ1OTYzIDE2LjYwMDcgOC40NTk2MyAxNi44OTM2IDguMTY2NzRMMTUuODMzIDcuMTA2MDhaTTE5LjA3NTQgNS45ODQ5MkMxOS4zNjgzIDUuNjkyMDMgMTkuMzY4MyA1LjIxNzE1IDE5LjA3NTQgNC45MjQyNkMxOC43ODI1IDQuNjMxMzcgMTguMzA3NyA0LjYzMTM3IDE4LjAxNDggNC45MjQyNkwxOS4wNzU0IDUuOTg0OTJaTTE2Ljg5MzYgOC4xNjY3NEwxOS4wNzU0IDUuOTg0OTJMMTguMDE0OCA0LjkyNDI2TDE1LjgzMyA3LjEwNjA4TDE2Ljg5MzYgOC4xNjY3NFoiIGZpbGw9IiMxQzI3NEMiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMTQuMzc4OSAxNi44OTQyQzE0LjY3MTggMTcuMTg3MSAxNS4xNDY3IDE3LjE4NzEgMTUuNDM5NiAxNi44OTQyQzE1LjczMjUgMTYuNjAxMyAxNS43MzI1IDE2LjEyNjQgMTUuNDM5NiAxNS44MzM2TDE0LjM3ODkgMTYuODk0MlpNMTIuNTU0MiAxMi45NDgyQzEyLjI2MTMgMTIuNjU1MyAxMS43ODY0IDEyLjY1NTMgMTEuNDkzNiAxMi45NDgyQzExLjIwMDcgMTMuMjQxMSAxMS4yMDA3IDEzLjcxNiAxMS40OTM2IDE0LjAwODhMMTIuNTU0MiAxMi45NDgyWk0xMi43NDI2IDE4LjUzMDZDMTMuMDM1NCAxOC44MjM1IDEzLjUxMDMgMTguODIzNSAxMy44MDMyIDE4LjUzMDZDMTQuMDk2MSAxOC4yMzc3IDE0LjA5NjEgMTcuNzYyOCAxMy44MDMyIDE3LjQ2OTlMMTIuNzQyNiAxOC41MzA2Wk0xMi4xNTczIDE1LjgyNEMxMS44NjQ0IDE1LjUzMTEgMTEuMzg5NSAxNS41MzExIDExLjA5NjYgMTUuODI0QzEwLjgwMzcgMTYuMTE2OSAxMC44MDM3IDE2LjU5MTcgMTEuMDk2NiAxNi44ODQ2TDEyLjE1NzMgMTUuODI0Wk0xNS40Mzk2IDE1LjgzMzZMMTIuNTU0MiAxMi45NDgyTDExLjQ5MzYgMTQuMDA4OEwxNC4zNzg5IDE2Ljg5NDJMMTUuNDM5NiAxNS44MzM2Wk0xMy44MDMyIDE3LjQ2OTlMMTIuMTU3MyAxNS44MjRMMTEuMDk2NiAxNi44ODQ2TDEyLjc0MjYgMTguNTMwNkwxMy44MDMyIDE3LjQ2OTlaIiBmaWxsPSIjMUMyNzRDIi8+Cjwvc3ZnPgo=)
 */
export const Syringe:Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
        <path d="M6.18201 10.5455L6.71234 11.0758L6.18201 10.5455ZM13.4547 17.8182L13.9851 18.3485L13.4547 17.8182ZM17.7376 9.0101L17.2072 9.54043L17.7376 9.0101ZM19.0241 10.5692L19.7289 10.3127L19.0241 10.5692ZM17.7376 13.5354L17.2072 13.005L17.7376 13.5354ZM19.0241 11.9763L19.7289 12.2328L19.0241 11.9763ZM14.9901 6.26263L15.5204 5.7323L14.9901 6.26263ZM13.431 4.97611L13.1745 5.68088L13.431 4.97611ZM10.4648 6.26263L10.9952 6.79296V6.79296L10.4648 6.26263ZM12.0239 4.97611L12.2804 5.68088L12.0239 4.97611ZM19.4699 7.43942C19.7628 7.73231 20.2376 7.73231 20.5305 7.43942C20.8234 7.14653 20.8234 6.67165 20.5305 6.37876L19.4699 7.43942ZM17.6214 3.46967C17.3285 3.17678 16.8537 3.17678 16.5608 3.46967C16.2679 3.76256 16.2679 4.23744 16.5608 4.53033L17.6214 3.46967ZM14.4598 6.79296L17.2072 9.54043L18.2679 8.47977L15.5204 5.7323L14.4598 6.79296ZM17.2072 13.005L12.9244 17.2879L13.9851 18.3485L18.2679 14.0657L17.2072 13.005ZM6.71234 11.0758L10.9952 6.79296L9.93451 5.7323L5.65168 10.0151L6.71234 11.0758ZM6.71234 17.2879C4.99693 15.5724 4.99693 12.7912 6.71234 11.0758L5.65168 10.0151C3.35048 12.3163 3.35048 16.0473 5.65168 18.3485L6.71234 17.2879ZM12.9244 17.2879C11.209 19.0033 8.42776 19.0033 6.71234 17.2879L5.65168 18.3485C7.95288 20.6497 11.6839 20.6497 13.9851 18.3485L12.9244 17.2879ZM17.2072 9.54043C17.5922 9.92536 17.851 10.1849 18.0361 10.4003C18.2161 10.6099 18.2852 10.7319 18.3193 10.8257L19.7289 10.3127C19.607 9.97792 19.4097 9.69728 19.1738 9.42281C18.9431 9.15428 18.6367 8.84854 18.2679 8.47977L17.2072 9.54043ZM18.2679 14.0657C18.6367 13.6969 18.9431 13.3912 19.1738 13.1226C19.4097 12.8482 19.607 12.5675 19.7289 12.2328L18.3193 11.7198C18.2852 11.8136 18.2161 11.9356 18.0361 12.1451C17.851 12.3606 17.5922 12.6201 17.2072 13.005L18.2679 14.0657ZM18.3193 10.8257C18.4244 11.1145 18.4244 11.431 18.3193 11.7198L19.7289 12.2328C19.9546 11.6126 19.9546 10.9328 19.7289 10.3127L18.3193 10.8257ZM15.5204 5.7323C15.1517 5.36353 14.8459 5.05708 14.5774 4.82636C14.3029 4.59053 14.0223 4.39317 13.6875 4.27134L13.1745 5.68088C13.2683 5.71501 13.3903 5.78407 13.5998 5.96408C13.8153 6.1492 14.0748 6.40802 14.4598 6.79296L15.5204 5.7323ZM10.9952 6.79296C11.3801 6.40802 11.6396 6.1492 11.8551 5.96408C12.0646 5.78407 12.1866 5.71501 12.2804 5.68088L11.7674 4.27134C11.4327 4.39317 11.152 4.59053 10.8775 4.82636C10.609 5.05708 10.3033 5.36353 9.93451 5.7323L10.9952 6.79296ZM13.6875 4.27134C13.0674 4.04562 12.3875 4.04562 11.7674 4.27134L12.2804 5.68088C12.5692 5.57578 12.8857 5.57578 13.1745 5.68088L13.6875 4.27134ZM18.0153 5.98488L19.4699 7.43942L20.5305 6.37876L19.076 4.92422L18.0153 5.98488ZM19.076 4.92422L17.6214 3.46967L16.5608 4.53033L18.0153 5.98488L19.076 4.92422Z" fill="currentColor"/>
<path d="M17.0911 14.1819L9.81836 6.90918" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.5" d="M6.18182 17.8184L4 20.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.5" d="M15.833 7.10608C15.5401 7.39897 15.5401 7.87384 15.833 8.16674C16.1258 8.45963 16.6007 8.45963 16.8936 8.16674L15.833 7.10608ZM19.0754 5.98492C19.3683 5.69203 19.3683 5.21715 19.0754 4.92426C18.7825 4.63137 18.3077 4.63137 18.0148 4.92426L19.0754 5.98492ZM16.8936 8.16674L19.0754 5.98492L18.0148 4.92426L15.833 7.10608L16.8936 8.16674Z" fill="currentColor"/>
<path opacity="0.5" d="M14.3789 16.8942C14.6718 17.1871 15.1467 17.1871 15.4396 16.8942C15.7325 16.6013 15.7325 16.1264 15.4396 15.8336L14.3789 16.8942ZM12.5542 12.9482C12.2613 12.6553 11.7864 12.6553 11.4936 12.9482C11.2007 13.2411 11.2007 13.716 11.4936 14.0088L12.5542 12.9482ZM12.7426 18.5306C13.0354 18.8235 13.5103 18.8235 13.8032 18.5306C14.0961 18.2377 14.0961 17.7628 13.8032 17.4699L12.7426 18.5306ZM12.1573 15.824C11.8644 15.5311 11.3895 15.5311 11.0966 15.824C10.8037 16.1169 10.8037 16.5917 11.0966 16.8846L12.1573 15.824ZM15.4396 15.8336L12.5542 12.9482L11.4936 14.0088L14.3789 16.8942L15.4396 15.8336ZM13.8032 17.4699L12.1573 15.824L11.0966 16.8846L12.7426 18.5306L13.8032 17.4699Z" fill="currentColor"/>
    </IconBase>
))

Syringe.displayName = "Syringe"