
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myBlueGreen: CustomThemeConfig = {
    name: 'my-blue-green',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "6px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #e00efb 
		"--color-primary-50": "250 219 254", // #fadbfe
		"--color-primary-100": "249 207 254", // #f9cffe
		"--color-primary-200": "247 195 254", // #f7c3fe
		"--color-primary-300": "243 159 253", // #f39ffd
		"--color-primary-400": "233 86 252", // #e956fc
		"--color-primary-500": "224 14 251", // #e00efb
		"--color-primary-600": "202 13 226", // #ca0de2
		"--color-primary-700": "168 11 188", // #a80bbc
		"--color-primary-800": "134 8 151", // #860897
		"--color-primary-900": "110 7 123", // #6e077b
		// secondary | #2777d3 
		"--color-secondary-50": "223 235 248", // #dfebf8
		"--color-secondary-100": "212 228 246", // #d4e4f6
		"--color-secondary-200": "201 221 244", // #c9ddf4
		"--color-secondary-300": "169 201 237", // #a9c9ed
		"--color-secondary-400": "104 160 224", // #68a0e0
		"--color-secondary-500": "39 119 211", // #2777d3
		"--color-secondary-600": "35 107 190", // #236bbe
		"--color-secondary-700": "29 89 158", // #1d599e
		"--color-secondary-800": "23 71 127", // #17477f
		"--color-secondary-900": "19 58 103", // #133a67
		// tertiary | #00ffbf 
		"--color-tertiary-50": "217 255 245", // #d9fff5
		"--color-tertiary-100": "204 255 242", // #ccfff2
		"--color-tertiary-200": "191 255 239", // #bfffef
		"--color-tertiary-300": "153 255 229", // #99ffe5
		"--color-tertiary-400": "77 255 210", // #4dffd2
		"--color-tertiary-500": "0 255 191", // #00ffbf
		"--color-tertiary-600": "0 230 172", // #00e6ac
		"--color-tertiary-700": "0 191 143", // #00bf8f
		"--color-tertiary-800": "0 153 115", // #009973
		"--color-tertiary-900": "0 125 94", // #007d5e
		// success | #8deb00 
		"--color-success-50": "238 252 217", // #eefcd9
		"--color-success-100": "232 251 204", // #e8fbcc
		"--color-success-200": "227 250 191", // #e3fabf
		"--color-success-300": "209 247 153", // #d1f799
		"--color-success-400": "175 241 77", // #aff14d
		"--color-success-500": "141 235 0", // #8deb00
		"--color-success-600": "127 212 0", // #7fd400
		"--color-success-700": "106 176 0", // #6ab000
		"--color-success-800": "85 141 0", // #558d00
		"--color-success-900": "69 115 0", // #457300
		// warning | #fabb00 
		"--color-warning-50": "254 245 217", // #fef5d9
		"--color-warning-100": "254 241 204", // #fef1cc
		"--color-warning-200": "254 238 191", // #feeebf
		"--color-warning-300": "253 228 153", // #fde499
		"--color-warning-400": "252 207 77", // #fccf4d
		"--color-warning-500": "250 187 0", // #fabb00
		"--color-warning-600": "225 168 0", // #e1a800
		"--color-warning-700": "188 140 0", // #bc8c00
		"--color-warning-800": "150 112 0", // #967000
		"--color-warning-900": "123 92 0", // #7b5c00
		// error | #f23a3a 
		"--color-error-50": "253 225 225", // #fde1e1
		"--color-error-100": "252 216 216", // #fcd8d8
		"--color-error-200": "252 206 206", // #fccece
		"--color-error-300": "250 176 176", // #fab0b0
		"--color-error-400": "246 117 117", // #f67575
		"--color-error-500": "242 58 58", // #f23a3a
		"--color-error-600": "218 52 52", // #da3434
		"--color-error-700": "182 44 44", // #b62c2c
		"--color-error-800": "145 35 35", // #912323
		"--color-error-900": "119 28 28", // #771c1c
		// surface | #131313 
		"--color-surface-50": "220 220 220", // #dcdcdc
		"--color-surface-100": "208 208 208", // #d0d0d0
		"--color-surface-200": "196 196 196", // #c4c4c4
		"--color-surface-300": "161 161 161", // #a1a1a1
		"--color-surface-400": "90 90 90", // #5a5a5a
		"--color-surface-500": "19 19 19", // #131313
		"--color-surface-600": "17 17 17", // #111111
		"--color-surface-700": "14 14 14", // #0e0e0e
		"--color-surface-800": "11 11 11", // #0b0b0b
		"--color-surface-900": "9 9 9", // #090909
		
	}
}