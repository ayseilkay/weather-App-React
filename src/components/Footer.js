import React from 'react'

function Footer() {
    return (
        <footer class="text-white text-center fixed inset-x-0 bottom-0 hidden md:block">
        <div class="container mx-auto px-6">
            <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                <div class="sm:w-2/3 text-center py-6">
                    <p class="text-sm text-gray-700 font-bold mb-2">
                        © 2022 by <a class ="underline" href="https://github.com/ayseilkay">Ayşe İlkay</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
