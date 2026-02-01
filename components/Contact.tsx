export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-agri-light/10">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-agri-dark">Get in Touch</h2>
                        <p className="text-gray-500 mt-2">Have questions? Our team is here to help you grow.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agri-main focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agri-main focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agri-main focus:border-transparent outline-none transition-all"
                                placeholder="How can we assist you?"
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-agri-dark text-white font-bold py-3 px-6 rounded-md hover:bg-agri-main transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
