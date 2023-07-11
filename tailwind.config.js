import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import("tailwindcss").Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    safelist: [
        'z-10',
        'z-20',
        'z-30',
        'z-40',
        'z-50',
        'z-60',
        'z-70',
        'z-80',
        'z-90',
        'z-100',
    ],
    plugins: [forms],
}
