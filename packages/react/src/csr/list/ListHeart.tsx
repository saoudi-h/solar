/* GENERATED FILE */
import React, { forwardRef } from "react"
import type { IconProps, Icon } from "../../lib/types"
import IconBase from "../../lib/IconBase"
import weights from "../../defs/list/ListHeart"

/**
 * ### ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkYiIC8+CjxwYXRoIGQ9Ik0xNCAxNS4wMzYxQzE0IDE2LjI3MDkgMTUuNDg0OSAxNy41Nzg5IDE2LjUyMDMgMTguMzQwOEMxNi45NTQ2IDE4LjY2MDMgMTcuMTcxNyAxOC44MjAxIDE3LjUgMTguODIwMUMxNy44MjgzIDE4LjgyMDEgMTguMDQ1NCAxOC42NjAzIDE4LjQ3OTcgMTguMzQwOEMxOS41MTUxIDE3LjU3ODkgMjEgMTYuMjcwOSAyMSAxNS4wMzYxQzIxIDEzLjAyODIgMTkuMDc0OSAxMi4yNzg2IDE3LjUgMTMuODI5NkMxNS45MjUxIDEyLjI3ODYgMTQgMTMuMDI4MiAxNCAxNS4wMzYxWiIgZmlsbD0iIzFDMjc0QyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMjUgNkMyLjI1IDUuNTg1NzkgMi41ODU3OSA1LjI1IDMgNS4yNUgyMUMyMS40MTQyIDUuMjUgMjEuNzUgNS41ODU3OSAyMS43NSA2QzIxLjc1IDYuNDE0MjEgMjEuNDE0MiA2Ljc1IDIxIDYuNzVIM0MyLjU4NTc5IDYuNzUgMi4yNSA2LjQxNDIxIDIuMjUgNlpNMi4yNSAxMEMyLjI1IDkuNTg1NzkgMi41ODU3OSA5LjI1IDMgOS4yNUgyMUMyMS40MTQyIDkuMjUgMjEuNzUgOS41ODU3OSAyMS43NSAxMEMyMS43NSAxMC40MTQyIDIxLjQxNDIgMTAuNzUgMjEgMTAuNzVIM0MyLjU4NTc5IDEwLjc1IDIuMjUgMTAuNDE0MiAyLjI1IDEwWk0yLjI1IDE0QzIuMjUgMTMuNTg1OCAyLjU4NTc5IDEzLjI1IDMgMTMuMjVIMTBDMTAuNDE0MiAxMy4yNSAxMC43NSAxMy41ODU4IDEwLjc1IDE0QzEwLjc1IDE0LjQxNDIgMTAuNDE0MiAxNC43NSAxMCAxNC43NUgzQzIuNTg1NzkgMTQuNzUgMi4yNSAxNC40MTQyIDIuMjUgMTRaTTIuMjUgMThDMi4yNSAxNy41ODU4IDIuNTg1NzkgMTcuMjUgMyAxNy4yNUgxMEMxMC40MTQyIDE3LjI1IDEwLjc1IDE3LjU4NTggMTAuNzUgMThDMTAuNzUgMTguNDE0MiAxMC40MTQyIDE4Ljc1IDEwIDE4Ljc1SDNDMi41ODU3OSAxOC43NSAyLjI1IDE4LjQxNDIgMi4yNSAxOFoiIGZpbGw9IiMxQzI3NEMiLz4KPC9zdmc+Cg==) Bold
 * ### ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkYiIC8+CjxnIG9wYWNpdHk9IjAuNSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi4yNSA2QzIuMjUgNS41ODU3OSAyLjU4NTc5IDUuMjUgMyA1LjI1SDIxQzIxLjQxNDIgNS4yNSAyMS43NSA1LjU4NTc5IDIxLjc1IDZDMjEuNzUgNi40MTQyMSAyMS40MTQyIDYuNzUgMjEgNi43NUgzQzIuNTg1NzkgNi43NSAyLjI1IDYuNDE0MjEgMi4yNSA2Wk0yLjI1IDEwQzIuMjUgOS41ODU3OSAyLjU4NTc5IDkuMjUgMyA5LjI1SDIxQzIxLjQxNDIgOS4yNSAyMS43NSA5LjU4NTc5IDIxLjc1IDEwQzIxLjc1IDEwLjQxNDIgMjEuNDE0MiAxMC43NSAyMSAxMC43NUgzQzIuNTg1NzkgMTAuNzUgMi4yNSAxMC40MTQyIDIuMjUgMTBaTTIuMjUgMTRDMi4yNSAxMy41ODU4IDIuNTg1NzkgMTMuMjUgMyAxMy4yNUgxMEMxMC40MTQyIDEzLjI1IDEwLjc1IDEzLjU4NTggMTAuNzUgMTRDMTAuNzUgMTQuNDE0MiAxMC40MTQyIDE0Ljc1IDEwIDE0Ljc1SDNDMi41ODU3OSAxNC43NSAyLjI1IDE0LjQxNDIgMi4yNSAxNFpNMi4yNSAxOEMyLjI1IDE3LjU4NTggMi41ODU3OSAxNy4yNSAzIDE3LjI1SDEwQzEwLjQxNDIgMTcuMjUgMTAuNzUgMTcuNTg1OCAxMC43NSAxOEMxMC43NSAxOC40MTQyIDEwLjQxNDIgMTguNzUgMTAgMTguNzVIM0MyLjU4NTc5IDE4Ljc1IDIuMjUgMTguNDE0MiAyLjI1IDE4WiIgZmlsbD0iIzFDMjc0QyIvPgo8L2c+CjxwYXRoIGQ9Ik0xNCAxNS4wMzYxQzE0IDE2LjI3MDkgMTUuNDg0OSAxNy41Nzg5IDE2LjUyMDMgMTguMzQwOEMxNi45NTQ2IDE4LjY2MDMgMTcuMTcxNyAxOC44MjAxIDE3LjUgMTguODIwMUMxNy44MjgzIDE4LjgyMDEgMTguMDQ1NCAxOC42NjAzIDE4LjQ3OTcgMTguMzQwOEMxOS41MTUxIDE3LjU3ODkgMjEgMTYuMjcwOSAyMSAxNS4wMzYxQzIxIDEzLjAyODIgMTkuMDc0OSAxMi4yNzg2IDE3LjUgMTMuODI5NkMxNS45MjUxIDEyLjI3ODYgMTQgMTMuMDI4MiAxNCAxNS4wMzYxWiIgZmlsbD0iIzFDMjc0QyIvPgo8L3N2Zz4K) BoldDuotone
 * ### ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkYiIC8+CjxwYXRoIGQ9Ik0xNi41MjAzIDE4LjM0MDhMMTYuMDc1OCAxOC45NDQ5SDE2LjA3NThMMTYuNTIwMyAxOC4zNDA4Wk0xNy41IDEzLjgyOTZMMTYuOTczNyAxNC4zNjRDMTcuMjY1NyAxNC42NTE1IDE3LjczNDMgMTQuNjUxNSAxOC4wMjYzIDE0LjM2NEwxNy41IDEzLjgyOTZaTTE4LjQ3OTcgMTguMzQwOEwxOC4wMzUxIDE3LjczNjdMMTguNDc5NyAxOC4zNDA4Wk0xNy41IDE4LjgyMDFMMTcuNSAxOS41NzAxTDE3LjUgMTguODIwMVpNMTYuOTY0OSAxNy43MzY3QzE2LjQ2NzcgMTcuMzcwOSAxNS44ODcxIDE2Ljg5MSAxNS40MzgyIDE2LjM3NEMxNC45NjgzIDE1LjgzMjkgMTQuNzUgMTUuMzczMyAxNC43NSAxNS4wMzYxSDEzLjI1QzEzLjI1IDE1LjkzMzcgMTMuNzc0MiAxNi43NDU1IDE0LjMwNTYgMTcuMzU3NUMxNC44NTggMTcuOTkzNyAxNS41Mzc2IDE4LjU0ODggMTYuMDc1OCAxOC45NDQ5TDE2Ljk2NDkgMTcuNzM2N1pNMTQuNzUgMTUuMDM2MUMxNC43NSAxNC4yNzk2IDE1LjA5MjkgMTMuOTE5NSAxNS40MTM4IDEzLjgwMzhDMTUuNzUwOCAxMy42ODIzIDE2LjMzMzMgMTMuNzMzMiAxNi45NzM3IDE0LjM2NEwxOC4wMjYzIDEzLjI5NTNDMTcuMDkxOCAxMi4zNzQ5IDE1LjkyNDMgMTIuMDI1MiAxNC45MDUgMTIuMzkyN0MxMy44Njk3IDEyLjc2NiAxMy4yNSAxMy43ODQ3IDEzLjI1IDE1LjAzNjFIMTQuNzVaTTE4LjkyNDIgMTguOTQ0OUMxOS40NjI0IDE4LjU0ODggMjAuMTQyIDE3Ljk5MzcgMjAuNjk0NCAxNy4zNTc1QzIxLjIyNTggMTYuNzQ1NSAyMS43NSAxNS45MzM3IDIxLjc1IDE1LjAzNjFIMjAuMjVDMjAuMjUgMTUuMzczMyAyMC4wMzE3IDE1LjgzMjkgMTkuNTYxOCAxNi4zNzRDMTkuMTEyOSAxNi44OTEgMTguNTMyMyAxNy4zNzA5IDE4LjAzNTEgMTcuNzM2N0wxOC45MjQyIDE4Ljk0NDlaTTIxLjc1IDE1LjAzNjFDMjEuNzUgMTMuNzg0NyAyMS4xMzAzIDEyLjc2NiAyMC4wOTUgMTIuMzkyN0MxOS4wNzU3IDEyLjAyNTIgMTcuOTA4MiAxMi4zNzQ5IDE2Ljk3MzcgMTMuMjk1M0wxOC4wMjYzIDE0LjM2NEMxOC42NjY3IDEzLjczMzIgMTkuMjQ5MiAxMy42ODIzIDE5LjU4NjIgMTMuODAzOEMxOS45MDcxIDEzLjkxOTUgMjAuMjUgMTQuMjc5NiAyMC4yNSAxNS4wMzYxSDIxLjc1Wk0xNi4wNzU4IDE4Ljk0NDlDMTYuNDU0MSAxOS4yMjMyIDE2Ljg3ODMgMTkuNTcwMSAxNy41IDE5LjU3MDFMMTcuNSAxOC4wNzAxQzE3LjQ3OTYgMTguMDcwMSAxNy40NjM3IDE4LjA3MSAxNy40MDMyIDE4LjAzODdDMTcuMzEyMSAxNy45OSAxNy4xOTgyIDE3LjkwODQgMTYuOTY0OSAxNy43MzY3TDE2LjA3NTggMTguOTQ0OVpNMTguMDM1MSAxNy43MzY3QzE3LjgwMTkgMTcuOTA4NCAxNy42ODggMTcuOTkgMTcuNTk2OCAxOC4wMzg3QzE3LjUzNjMgMTguMDcxIDE3LjUyMDQgMTguMDcwMSAxNy41IDE4LjA3MDFMMTcuNSAxOS41NzAxQzE4LjEyMTcgMTkuNTcwMSAxOC41NDU5IDE5LjIyMzIgMTguOTI0MiAxOC45NDQ5TDE4LjAzNTEgMTcuNzM2N1oiIGZpbGw9IiMxQzI3NEMiLz4KPHBhdGggZD0iTTEwIDE0SDMiIHN0cm9rZT0iIzFDMjc0QyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAgMThIMyIgc3Ryb2tlPSIjMUMyNzRDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0zIDZMMTMuNSA2TTIwIDZMMTcuNzUgNiIgc3Ryb2tlPSIjMUMyNzRDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMCAxMEw5LjUgMTBNMyAxMEg1LjI1IiBzdHJva2U9IiMxQzI3NEMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==) Broken
 * ### ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkYiIC8+CjxwYXRoIGQ9Ik0xNi41MjAzIDE4LjM0MDhMMTYuMDc1OCAxOC45NDQ5SDE2LjA3NThMMTYuNTIwMyAxOC4zNDA4Wk0xNy41IDEzLjgyOTZMMTYuOTczNyAxNC4zNjRDMTcuMjY1NyAxNC42NTE1IDE3LjczNDMgMTQuNjUxNSAxOC4wMjYzIDE0LjM2NEwxNy41IDEzLjgyOTZaTTE4LjQ3OTcgMTguMzQwOEwxOC4wMzUxIDE3LjczNjdMMTguNDc5NyAxOC4zNDA4Wk0xNy41IDE4LjgyMDFMMTcuNSAxOS41NzAxTDE3LjUgMTguODIwMVpNMTYuOTY0OSAxNy43MzY3QzE2LjQ2NzcgMTcuMzcwOSAxNS44ODcxIDE2Ljg5MSAxNS40MzgyIDE2LjM3NEMxNC45NjgzIDE1LjgzMjkgMTQuNzUgMTUuMzczMyAxNC43NSAxNS4wMzYxSDEzLjI1QzEzLjI1IDE1LjkzMzcgMTMuNzc0MiAxNi43NDU1IDE0LjMwNTYgMTcuMzU3NUMxNC44NTggMTcuOTkzNyAxNS41Mzc2IDE4LjU0ODggMTYuMDc1OCAxOC45NDQ5TDE2Ljk2NDkgMTcuNzM2N1pNMTQuNzUgMTUuMDM2MUMxNC43NSAxNC4yNzk2IDE1LjA5MjkgMTMuOTE5NSAxNS40MTM4IDEzLjgwMzhDMTUuNzUwOCAxMy42ODIzIDE2LjMzMzMgMTMuNzMzMiAxNi45NzM3IDE0LjM2NEwxOC4wMjYzIDEzLjI5NTNDMTcuMDkxOCAxMi4zNzQ5IDE1LjkyNDMgMTIuMDI1MiAxNC45MDUgMTIuMzkyN0MxMy44Njk3IDEyLjc2NiAxMy4yNSAxMy43ODQ3IDEzLjI1IDE1LjAzNjFIMTQuNzVaTTE4LjkyNDIgMTguOTQ0OUMxOS40NjI0IDE4LjU0ODggMjAuMTQyIDE3Ljk5MzcgMjAuNjk0NCAxNy4zNTc1QzIxLjIyNTggMTYuNzQ1NSAyMS43NSAxNS45MzM3IDIxLjc1IDE1LjAzNjFIMjAuMjVDMjAuMjUgMTUuMzczMyAyMC4wMzE3IDE1LjgzMjkgMTkuNTYxOCAxNi4zNzRDMTkuMTEyOSAxNi44OTEgMTguNTMyMyAxNy4zNzA5IDE4LjAzNTEgMTcuNzM2N0wxOC45MjQyIDE4Ljk0NDlaTTIxLjc1IDE1LjAzNjFDMjEuNzUgMTMuNzg0NyAyMS4xMzAzIDEyLjc2NiAyMC4wOTUgMTIuMzkyN0MxOS4wNzU3IDEyLjAyNTIgMTcuOTA4MiAxMi4zNzQ5IDE2Ljk3MzcgMTMuMjk1M0wxOC4wMjYzIDE0LjM2NEMxOC42NjY3IDEzLjczMzIgMTkuMjQ5MiAxMy42ODIzIDE5LjU4NjIgMTMuODAzOEMxOS45MDcxIDEzLjkxOTUgMjAuMjUgMTQuMjc5NiAyMC4yNSAxNS4wMzYxSDIxLjc1Wk0xNi4wNzU4IDE4Ljk0NDlDMTYuNDU0MSAxOS4yMjMyIDE2Ljg3ODMgMTkuNTcwMSAxNy41IDE5LjU3MDFMMTcuNSAxOC4wNzAxQzE3LjQ3OTYgMTguMDcwMSAxNy40NjM3IDE4LjA3MSAxNy40MDMyIDE4LjAzODdDMTcuMzEyMSAxNy45OSAxNy4xOTgyIDE3LjkwODQgMTYuOTY0OSAxNy43MzY3TDE2LjA3NTggMTguOTQ0OVpNMTguMDM1MSAxNy43MzY3QzE3LjgwMTkgMTcuOTA4NCAxNy42ODggMTcuOTkgMTcuNTk2OCAxOC4wMzg3QzE3LjUzNjMgMTguMDcxIDE3LjUyMDQgMTguMDcwMSAxNy41IDE4LjA3MDFMMTcuNSAxOS41NzAxQzE4LjEyMTcgMTkuNTcwMSAxOC41NDU5IDE5LjIyMzIgMTguOTI0MiAxOC45NDQ5TDE4LjAzNTEgMTcuNzM2N1oiIGZpbGw9IiMxQzI3NEMiLz4KPHBhdGggZD0iTTIxIDZMMyA2IiBzdHJva2U9IiMxQzI3NEMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTIxIDEwTDMgMTAiIHN0cm9rZT0iIzFDMjc0QyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAgMTRIMyIgc3Ryb2tlPSIjMUMyNzRDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCAxOEgzIiBzdHJva2U9IiMxQzI3NEMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==) Linear
 * ### ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkYiIC8+CjxwYXRoIGQ9Ik0xNi41MjAzIDE4LjM0MDhMMTYuMDc1OCAxOC45NDQ5SDE2LjA3NThMMTYuNTIwMyAxOC4zNDA4Wk0xNy41IDEzLjgyOTZMMTYuOTczNyAxNC4zNjRDMTcuMjY1NyAxNC42NTE1IDE3LjczNDMgMTQuNjUxNSAxOC4wMjYzIDE0LjM2NEwxNy41IDEzLjgyOTZaTTE4LjQ3OTcgMTguMzQwOEwxOC4wMzUxIDE3LjczNjdMMTguNDc5NyAxOC4zNDA4Wk0xNy41IDE4LjgyMDFMMTcuNSAxOS41NzAxTDE3LjUgMTguODIwMVpNMTYuOTY0OSAxNy43MzY3QzE2LjQ2NzcgMTcuMzcwOSAxNS44ODcxIDE2Ljg5MSAxNS40MzgyIDE2LjM3NEMxNC45NjgzIDE1LjgzMjkgMTQuNzUgMTUuMzczMyAxNC43NSAxNS4wMzYxSDEzLjI1QzEzLjI1IDE1LjkzMzcgMTMuNzc0MiAxNi43NDU1IDE0LjMwNTYgMTcuMzU3NUMxNC44NTggMTcuOTkzNyAxNS41Mzc2IDE4LjU0ODggMTYuMDc1OCAxOC45NDQ5TDE2Ljk2NDkgMTcuNzM2N1pNMTQuNzUgMTUuMDM2MUMxNC43NSAxNC4yNzk2IDE1LjA5MjkgMTMuOTE5NSAxNS40MTM4IDEzLjgwMzhDMTUuNzUwOCAxMy42ODIzIDE2LjMzMzMgMTMuNzMzMiAxNi45NzM3IDE0LjM2NEwxOC4wMjYzIDEzLjI5NTNDMTcuMDkxOCAxMi4zNzQ5IDE1LjkyNDMgMTIuMDI1MiAxNC45MDUgMTIuMzkyN0MxMy44Njk3IDEyLjc2NiAxMy4yNSAxMy43ODQ3IDEzLjI1IDE1LjAzNjFIMTQuNzVaTTE4LjkyNDIgMTguOTQ0OUMxOS40NjI0IDE4LjU0ODggMjAuMTQyIDE3Ljk5MzcgMjAuNjk0NCAxNy4zNTc1QzIxLjIyNTggMTYuNzQ1NSAyMS43NSAxNS45MzM3IDIxLjc1IDE1LjAzNjFIMjAuMjVDMjAuMjUgMTUuMzczMyAyMC4wMzE3IDE1LjgzMjkgMTkuNTYxOCAxNi4zNzRDMTkuMTEyOSAxNi44OTEgMTguNTMyMyAxNy4zNzA5IDE4LjAzNTEgMTcuNzM2N0wxOC45MjQyIDE4Ljk0NDlaTTIxLjc1IDE1LjAzNjFDMjEuNzUgMTMuNzg0NyAyMS4xMzAzIDEyLjc2NiAyMC4wOTUgMTIuMzkyN0MxOS4wNzU3IDEyLjAyNTIgMTcuOTA4MiAxMi4zNzQ5IDE2Ljk3MzcgMTMuMjk1M0wxOC4wMjYzIDE0LjM2NEMxOC42NjY3IDEzLjczMzIgMTkuMjQ5MiAxMy42ODIzIDE5LjU4NjIgMTMuODAzOEMxOS45MDcxIDEzLjkxOTUgMjAuMjUgMTQuMjc5NiAyMC4yNSAxNS4wMzYxSDIxLjc1Wk0xNi4wNzU4IDE4Ljk0NDlDMTYuNDU0MSAxOS4yMjMyIDE2Ljg3ODMgMTkuNTcwMSAxNy41IDE5LjU3MDFMMTcuNSAxOC4wNzAxQzE3LjQ3OTYgMTguMDcwMSAxNy40NjM3IDE4LjA3MSAxNy40MDMyIDE4LjAzODdDMTcuMzEyMSAxNy45OSAxNy4xOTgyIDE3LjkwODQgMTYuOTY0OSAxNy43MzY3TDE2LjA3NTggMTguOTQ0OVpNMTguMDM1MSAxNy43MzY3QzE3LjgwMTkgMTcuOTA4NCAxNy42ODggMTcuOTkgMTcuNTk2OCAxOC4wMzg3QzE3LjUzNjMgMTguMDcxIDE3LjUyMDQgMTguMDcwMSAxNy41IDE4LjA3MDFMMTcuNSAxOS41NzAxQzE4LjEyMTcgMTkuNTcwMSAxOC41NDU5IDE5LjIyMzIgMTguOTI0MiAxOC45NDQ5TDE4LjAzNTEgMTcuNzM2N1oiIGZpbGw9IiMxQzI3NEMiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMjEgNkwzIDYiIHN0cm9rZT0iIzFDMjc0QyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBvcGFjaXR5PSIwLjUiIGQ9Ik0yMSAxMEwzIDEwIiBzdHJva2U9IiMxQzI3NEMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMTAgMTRIMyIgc3Ryb2tlPSIjMUMyNzRDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZD0iTTEwIDE4SDMiIHN0cm9rZT0iIzFDMjc0QyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K) LineDuotone
 * ### ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNGRkYiIC8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi4yNSA2QzIuMjUgNS41ODU3OSAyLjU4NTc5IDUuMjUgMyA1LjI1SDIxQzIxLjQxNDIgNS4yNSAyMS43NSA1LjU4NTc5IDIxLjc1IDZDMjEuNzUgNi40MTQyMSAyMS40MTQyIDYuNzUgMjEgNi43NUgzQzIuNTg1NzkgNi43NSAyLjI1IDYuNDE0MjEgMi4yNSA2Wk0yLjI1IDEwQzIuMjUgOS41ODU3OSAyLjU4NTc5IDkuMjUgMyA5LjI1SDIxQzIxLjQxNDIgOS4yNSAyMS43NSA5LjU4NTc5IDIxLjc1IDEwQzIxLjc1IDEwLjQxNDIgMjEuNDE0MiAxMC43NSAyMSAxMC43NUgzQzIuNTg1NzkgMTAuNzUgMi4yNSAxMC40MTQyIDIuMjUgMTBaTTIwLjA5NSAxMi4zOTI3QzIxLjEzMDMgMTIuNzY2IDIxLjc1IDEzLjc4NDcgMjEuNzUgMTUuMDM2MUMyMS43NSAxNS45MzM3IDIxLjIyNTggMTYuNzQ1NSAyMC42OTQ0IDE3LjM1NzVDMjAuMTQyIDE3Ljk5MzcgMTkuNDYyNCAxOC41NDg4IDE4LjkyNDIgMTguOTQ0OUMxOC44OTk1IDE4Ljk2MyAxOC44NzQ2IDE4Ljk4MTUgMTguODQ5NSAxOS4wMDAxQzE4LjQ4OTcgMTkuMjY3IDE4LjA4MTEgMTkuNTcwMSAxNy41IDE5LjU3MDFDMTYuOTE4OSAxOS41NzAxIDE2LjUxMDMgMTkuMjY3IDE2LjE1MDUgMTkuMDAwMUMxNi4xMjU0IDE4Ljk4MTUgMTYuMTAwNSAxOC45NjMgMTYuMDc1OCAxOC45NDQ5QzE1LjUzNzYgMTguNTQ4OCAxNC44NTggMTcuOTkzNyAxNC4zMDU2IDE3LjM1NzVDMTMuNzc0MiAxNi43NDU1IDEzLjI1IDE1LjkzMzcgMTMuMjUgMTUuMDM2MUMxMy4yNSAxMy43ODQ3IDEzLjg2OTcgMTIuNzY2IDE0LjkwNSAxMi4zOTI3QzE1Ljc0MDQgMTIuMDkxNSAxNi42NzU0IDEyLjI3MjEgMTcuNSAxMi44NTM3QzE4LjMyNDYgMTIuMjcyMSAxOS4yNTk2IDEyLjA5MTUgMjAuMDk1IDEyLjM5MjdaTTE5LjU4NjIgMTMuODAzOEMxOS4yNDkyIDEzLjY4MjMgMTguNjY2NyAxMy43MzMyIDE4LjAyNjMgMTQuMzY0QzE3LjczNDMgMTQuNjUxNSAxNy4yNjU3IDE0LjY1MTUgMTYuOTczNyAxNC4zNjRDMTYuMzMzMyAxMy43MzMyIDE1Ljc1MDggMTMuNjgyMyAxNS40MTM4IDEzLjgwMzhDMTUuMDkyOSAxMy45MTk1IDE0Ljc1IDE0LjI3OTYgMTQuNzUgMTUuMDM2MUMxNC43NSAxNS4zNzMzIDE0Ljk2ODMgMTUuODMyOSAxNS40MzgyIDE2LjM3NEMxNS44ODcxIDE2Ljg5MSAxNi40Njc3IDE3LjM3MDkgMTYuOTY0OSAxNy43MzY3QzE3LjE5ODIgMTcuOTA4NCAxNy4zMTIxIDE3Ljk5IDE3LjQwMzIgMTguMDM4N0MxNy40NjIxIDE4LjA3MDIgMTcuNDc4NyAxOC4wNzAxIDE3LjQ5ODQgMTguMDcwMUwxNy41IDE4LjA3MDFMMTcuNTAxNiAxOC4wNzAxQzE3LjUyMTMgMTguMDcwMSAxNy41Mzc5IDE4LjA3MDIgMTcuNTk2OCAxOC4wMzg3QzE3LjY4OCAxNy45OSAxNy44MDE5IDE3LjkwODQgMTguMDM1MSAxNy43MzY3QzE4LjUzMjMgMTcuMzcwOSAxOS4xMTI5IDE2Ljg5MSAxOS41NjE4IDE2LjM3NEMyMC4wMzE3IDE1LjgzMjkgMjAuMjUgMTUuMzczMyAyMC4yNSAxNS4wMzYxQzIwLjI1IDE0LjI3OTYgMTkuOTA3MSAxMy45MTk1IDE5LjU4NjIgMTMuODAzOFpNMi4yNSAxNEMyLjI1IDEzLjU4NTggMi41ODU3OSAxMy4yNSAzIDEzLjI1SDEwQzEwLjQxNDIgMTMuMjUgMTAuNzUgMTMuNTg1OCAxMC43NSAxNEMxMC43NSAxNC40MTQyIDEwLjQxNDIgMTQuNzUgMTAgMTQuNzVIM0MyLjU4NTc5IDE0Ljc1IDIuMjUgMTQuNDE0MiAyLjI1IDE0Wk0yLjI1IDE4QzIuMjUgMTcuNTg1OCAyLjU4NTc5IDE3LjI1IDMgMTcuMjVIMTBDMTAuNDE0MiAxNy4yNSAxMC43NSAxNy41ODU4IDEwLjc1IDE4QzEwLjc1IDE4LjQxNDIgMTAuNDE0MiAxOC43NSAxMCAxOC43NUgzQzIuNTg1NzkgMTguNzUgMi4yNSAxOC40MTQyIDIuMjUgMThaIiBmaWxsPSIjMUMyNzRDIi8+Cjwvc3ZnPgo=) Outline
 */
const ListHeart: Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconBase ref={ref} {...props} weights={weights} />
))

ListHeart.displayName = "ListHeart"
export default ListHeart