import React, {useState} from "react";


function Signup() {

    // Input parameters
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [facultyType, setFacultyType] = useState("");
    const [facultyCode, setFacultycode] = useState("");

    // 
    const collectData = async (e) => {
        e.preventDefault();
        console.log(username, email, firstname, lastname, phone, country, facultyType, facultyCode);
    }

    return (
        <form className="w-full md:w-[800px] p-4 md:px-0 mx-auto" onSubmit={collectData}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-2xl font-semibold leading-7 text-gray-900  mt-8">Create Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will not be displayed publicly.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">gcect_</span>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Abhishek"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email Address
                            </label>
                            <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="abc@gcect.ac.in"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12 ">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter First Name"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Last Name"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="Mobile-number" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm pr-2">+91</span>
                                    <input
                                        type="number"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="0000000000"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option value={null} disabled>Select Country</option>
                                    <option>India</option>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="facultyType" className="block text-sm font-medium leading-6 text-gray-900">
                                Faculty Type
                            </label>
                            <div className="mt-2">
                                <select
                                    id="facultyType"
                                    name="facultyType"
                                    autoComplete="Faculty-Type"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    value={facultyType}
                                    onChange={(e) => setFacultyType(e.target.value)}
                                >
                                    <option value={null} disabled>Select Faculty Type</option>
                                    <option>Parmanent</option>
                                    <option>Contractual</option>
                                    <option>Internship</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="Faculty-code" className="block text-sm font-medium leading-6 text-gray-900">
                                Faculty Code
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Faculty-code"
                                    id="Faculty-code"
                                    autoComplete="Faculty-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Faculty Code"
                                    value={facultyCode}
                                    onChange={(e) => setFacultycode(e.target.value)}
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default Signup;