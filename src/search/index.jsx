import {
    ArrowPathIcon,
    MagnifyingGlassIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

export default function Search({ search, setSearch, handleSearch, loading }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
            }}
            className="group relative flex gap-2 items-center transition-all duration-300"
        >
            <div className="relative flex-1">
                <MagnifyingGlassIcon className="h-5 w-5 text-white/80 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Search for a city..."
                    className="w-full rounded-full pl-12 pr-8 py-4 bg-white/20 backdrop-blur-sm
                     text-white placeholder-white/70 focus:outline-none focus:ring-2 
                     focus:ring-white/50 transition-all hover:bg-white/30
                     border border-transparent focus:border-white/30 text-sm sm:text-base"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    disabled={loading}
                />
                {search && (
                    <button
                        type="button"
                        onClick={() => setSearch('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full
                       hover:bg-white/20 transition-colors"
                    >
                        <XMarkIcon className="h-4 w-4 text-white/80" />
                    </button>
                )}
            </div>

            <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-white/30 hover:bg-white/40 px-5 py-4 
                   text-white backdrop-blur-sm transition-all hover:scale-105 
                   active:scale-95 shadow-sm flex items-center gap-2
                   disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
                {loading ? (
                    <ArrowPathIcon className="h-5 w-5 animate-spin" />
                ) : (
                    <>
                        <span className="hidden sm:inline">Search</span>
                        <MagnifyingGlassIcon className="h-5 w-5" />
                    </>
                )}
            </button>
        </form>
    )
}