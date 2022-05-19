'use strict'

class Table {
    render(root) {
        const table = `
        <div id="shape3"></div>
        <div id="shape1"></div>
            <table class="w-full text-sm text-left text-gray-400">
                <thead class="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Importance
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Complete
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Actions
                        </th>
                        <th scope="col" class="px-3 py-3 text-center">
                            Date Create
                        </th>
                        <th scope="col" class="px-3 py-3 text-center">
                            Hour
                        </th>
                    </tr>
                </thead>
                <tbody id="tbody">
                </tbody>
            </table>
        `
        root.innerHTML += table
    }
}

export default Table