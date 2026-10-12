export default function Card({ user,i }) {

    return (
    <article key={i} className="flex w-100 flex-row gap-5 p-5 bg-blue-100 rounded-xl">
        <div>
            <img src={user.image} alt={user.name} className="w-30" />
        </div>
        <div>
            <div className="flex flex-col gap-5">
                <p className="text-3xl font-bold">{user.name}</p>

            </div>
            <div className="flex flex-col gap-5">
                <p className="text-xs font-bold">Statut : {user.status}</p>
                <p className="text-xs font-bold">Origin : {user.origin.name}</p>
                <p className="text-xs font-bold">Espèce : {user.species}</p>
            </div>
        </div>
    </article>
    )
}