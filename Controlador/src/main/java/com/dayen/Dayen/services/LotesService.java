package com.dayen.Dayen.services;

import com.dayen.Dayen.entity.Lotes;
import com.dayen.Dayen.repository.LoteRepository;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LotesService {
	private final LoteRepository loteRepository;

	public LotesService(LoteRepository loteRepository) {
		this.loteRepository = loteRepository;
	}

	public List<Lotes> getAllLotesByUsuario(@NotNull Integer idUsuario){
		return this.loteRepository.findAllByIdUsuario(idUsuario);
	}
}
