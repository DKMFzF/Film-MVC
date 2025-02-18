import { AppState, AppStateModals } from '@/types/components/model/AppState';
import { Controller } from '@/components/base/Controller';

export class MainController extends Controller<AppState> {
	onOpenBasket = () => {
		console.log('MainController -> onOpenBasket: OK');
		this.model.openModal(AppStateModals.basket);
	};

	onSelectFilm = (id: string) => {
		this.model.selectMovie(id);
	};

	onOpenFilm = async (id: string) => {
		await this.model.loadSchedule(id);
		this.model.openModal(AppStateModals.session);
	};
}
