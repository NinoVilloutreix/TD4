import { motion } from "motion/react";

const cardElastic = {
    rest: { scale: 1 },
    hover: {
        scale: 1.1,
        color: "var(--clr-bright)",
        transition: { type: "spring", damping: 10, stiffness: 600 },
    },
    tap: { scale: 0.9 },
};

const pulse = {
    rest: { scale: 0, opacity: 1 },
    tap: { scale: 2, opacity: 10 },
};


export default function Card({ user, i }) {






    return (
        <motion.article
            key={i}
            className="flex relative w-100 z-100 bg-dark flex-row gap-5 p-5 border overflow-hidden border-current rounded-xl hover:cursor-pointer"
            variants={cardElastic}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
        >
            <div className="z-10">
                <img src={user.image} alt={user.name} className="w-30 rounded-full" />
            </div>
            <div className="flex z-10 flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <p className="text-l font-bold">{user.name}</p>
                    <span className="bg-current w-50 h-0.5"></span>
                </div>
                <div className="flex flex-col gap-3 font-light">
                    <p className="text-xs font-bold">Statut : {user.status}</p>
                    <p className="text-xs font-bold">Origin : {user.origin.name}</p>
                    <p className="text-xs font-bold">Espèce : {user.species}</p>
                </div>
            </div>
            <motion.span className="pulse absolute -z-10 top-0 left-0 bg-bright w-full h-full"
                variants={pulse}
                initial="rest"
                whileTap="tap"
            >

            </motion.span>
        </motion.article>
    )
}